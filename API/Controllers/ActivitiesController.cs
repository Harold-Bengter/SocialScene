using Domain;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;


// Sometimes dotnet watch doesnt see the new api controller working so reload using dotnet watch --no-hot-reload
namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
        private readonly DataContext _context;
       
        public ActivitiesController(DataContext context)
        {
            _context = context;
            
        }

        [HttpGet]  //api/activities
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await _context.Activities.ToListAsync();
        }


        [HttpGet("{Id}")] // Route perameter

        public async Task<ActionResult<Activity>>GetActivity(Guid Id)
        {
            return await _context.Activities.FindAsync(Id);
        }
    }
}