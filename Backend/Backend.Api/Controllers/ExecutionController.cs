﻿using Backend.Api.Extensions;
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

            //await _executionService.Create(executionDto, appUser.Id, agptBlock.Id);
            return Ok(await _executionService.Create(executionDto, appUser.Id, agptBlock.Id));
        }
    }
}
