using Backend.Api.Extensions;
using Backend.Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Api.Controllers
{
    [Route("api/execution")]
    [ApiController]
    public class ExecutionController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public ExecutionController(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> getUsernameFromToken()
        {
            var username = User.GetUsername();
            return Ok(username);
        }
    }
}
