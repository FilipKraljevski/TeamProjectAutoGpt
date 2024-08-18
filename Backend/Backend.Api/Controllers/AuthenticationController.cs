using Backend.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly UserManager<ApplicationUser> _userManager;

        public AuthenticationController(SignInManager<ApplicationUser> signInManager, UserManager<ApplicationUser> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(ApplicationUser applicationUser)
        {
            IdentityResult result = new IdentityResult();

            try
            {
                ApplicationUser user = new ApplicationUser()
                {
                    UserName = applicationUser.UserName,
                    Email = applicationUser.Email,
                    PasswordHash = applicationUser.PasswordHash,
                    FirstName = applicationUser.FirstName,
                    LastName = applicationUser.LastName,
                };
                result = await _userManager.CreateAsync(user);

                if (!result.Succeeded)
                {
                    return BadRequest(result);
                }

            } catch (Exception ex)
            {
                return BadRequest("Something went wrong, please try again");
            }

            return Ok(result);
        }
    }
}
