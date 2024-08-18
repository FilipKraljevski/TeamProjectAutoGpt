using Backend.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Backend.Application.Dtos.Request;
using Backend.Application.Dtos.Response;
using Backend.Application.Service.Interfaces;

namespace Backend.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly ITokenService _tokenService;

        public AccountController(UserManager<ApplicationUser> userManager, ITokenService tokenService)
        {
            _userManager = userManager;
            _tokenService = tokenService;
        }

        [HttpPost("register")]
        public async Task<ActionResult> Register([FromBody] RegisterRequest registerRequest)
        {
            try
            {
                if(!ModelState.IsValid)
                    return BadRequest(ModelState);
                var user = new ApplicationUser
                {
                    UserName = registerRequest.Username,
                    Email = registerRequest.Email
                };
                var createdUser = await _userManager.CreateAsync(user, registerRequest.Password);


                if (createdUser.Succeeded)
                {
                    RegisterResponse response = new RegisterResponse
                    {
                        Username = user.UserName,
                        Email = user.Email,
                        Token = _tokenService.CreateToken(user)
                    };

                    return Ok(response);
                }
                return BadRequest(createdUser.Errors);
            } catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
