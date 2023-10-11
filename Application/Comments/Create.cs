using Application.Core;
using Application.Interfaces;
using AutoMapper;
using Domain;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Comments
{
    public class Create
    {
        public class Command : IRequest<Result<CommentDto>>
        {
            public string Body { get; set; }
            public Guid ActivityId { get; set; }
        }
        // Dont want to receive empty comments so added validatior
        public class CommandValidatior : AbstractValidator<Command>
        {
            public CommandValidatior()
            {
                RuleFor(x => x.Body).NotEmpty();
            }
        }

        // Get user data that shapes comments
        public class Handler : IRequestHandler<Command, Result<CommentDto>>
        {
        private readonly DataContext _context;
        private readonly IUserAccessor _userAccessor;
        private readonly IMapper _mapper;

            // Need to update DB, mapper shapes data, IUSer to get current user mapping comment
            public Handler(DataContext context, IMapper mapper, IUserAccessor userAccessor)
            {
            _userAccessor = userAccessor;
            _context = context;
            _mapper = mapper;
            }

            public async Task<Result<CommentDto>> Handle(Command request, CancellationToken cancellationToken)
            {
                var activity = await _context.Activities.FindAsync(request.ActivityId);
                
                if(activity == null) return null;

                var user = await _context.Users
                      .Include(p => p.Photos)
                      .SingleOrDefaultAsync(x => x.UserName == _userAccessor.GetUsername());
                
                var comment = new Comment
                {
                    Author = user,
                    Activity = activity,
                    Body = request.Body
                };

                activity.Comments.Add(comment);

                var success = await _context.SaveChangesAsync() > 0;

                if(success) return Result<CommentDto>.Success(_mapper.Map<CommentDto>(comment));

                return Result<CommentDto>.Failure("Failed to add comment");
            }
        }
    }
}