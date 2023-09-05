using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController] // Attribute
    [Route("api/[controller]")]
    public class BaseApiController : ControllerBase
    {
        private IMediator _mediator;
        //Means this or any derived class
        protected IMediator Mediator => _mediator ??=
        HttpContext.RequestServices.GetService<IMediator>();
    }
}