using Backend.Api.Extensions;
using Backend.Application.Dtos.Request;
using Backend.Application.Service.Interfaces;
using Backend.Domain.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Api.Controllers
{
    [Route("api/execution")]
    [ApiController]
    public class ExecutionController : ControllerBase
    {
        private readonly IExecutionService _executionService;
        private readonly IAgptBlockService _blockService;
        private readonly UserManager<ApplicationUser> _userManager;

        public ExecutionController(IExecutionService executionService, IAgptBlockService agptBlockService, UserManager<ApplicationUser> userManager)
        {
            _executionService = executionService;
            _blockService = agptBlockService;
            _userManager = userManager;
        }

        [HttpGet("{id}")]
        [Authorize]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var execution = await _executionService.GetById(id);
            if (execution == null)
            {
                return NotFound();
            }
            return Ok(execution);
        }

        [HttpGet]
        [Authorize]
        public async Task<IActionResult> GetExecutions([FromQuery] string? agptBlockId, [FromQuery] DateTime? dateTime)
        {
            var username = User.GetUsername();
            var appUser = await _userManager.FindByNameAsync(username);

            return Ok(await _executionService.GetAllFiltered(appUser.Id, agptBlockId, dateTime));
        }

        [HttpPost("agptBlock/{agptBlockId}/save")]
        [Authorize]
        public async Task<IActionResult> Create(ExecutionRequest executionDto, [FromRoute] string agptBlockId)
        {
            var username = User.GetUsername();
            var appUser = await _userManager.FindByNameAsync(username);

            var agptBlock = await _blockService.GetById(agptBlockId);

            if(agptBlock == null)
            {
                return NotFound("AgptBlock does not exist");
            }

            return Ok(await _executionService.Create(executionDto, appUser.Id, agptBlock.Id));
        }

        [HttpDelete("{id}/delete")]
        [Authorize]
        public async Task<IActionResult> DeleteById([FromRoute] int id)
        {
            var result = await _executionService.DeleteById(id);

            if(result)
            {
                return Ok("Deleted successfully");
            }
            return BadRequest();
        }
    }
}
