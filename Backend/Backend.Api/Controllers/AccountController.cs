using Backend.Domain.Entities;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Backend.Application.Dtos.Request;
using Backend.Application.Dtos.Response;
using Backend.Application.Service.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace Backend.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<ApplicationUser> _userManager;
        private readonly SignInManager<ApplicationUser> _signInManager;
        private readonly ITokenService _tokenService;

        public AccountController(UserManager<ApplicationUser> userManager, ITokenService tokenService, SignInManager<ApplicationUser> signInManager)
        {
            _userManager = userManager;
            _tokenService = tokenService;
            _signInManager = signInManager;
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


        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest loginRequest)
        {
            if(!ModelState.IsValid)
                return BadRequest(ModelState);

            var user = await _userManager.Users.FirstOrDefaultAsync(u => u.UserName == loginRequest.Username);

            if (user == null)
                return Unauthorized("Invalid username");

            var result = await _signInManager.CheckPasswordSignInAsync(user, loginRequest.Password, false);

            if(!result.Succeeded)
                return Unauthorized("Username not found or password incorrect");

            LoginResponse response = new LoginResponse
            {
                Username = user.UserName,
                Email = user.Email,
                Token = _tokenService.CreateToken(user)
            };

            return Ok(response);
        }
    }
}
