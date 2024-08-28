using Backend.Application.Service.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace Backend.Api.Controllers
{
    [Route("api/agptBlock")]
    [ApiController]
    public class AgptBlockController : ControllerBase
    {
        private readonly IAgptBlockService _agptBlockService;

        public AgptBlockController(IAgptBlockService agptBlockService)
        {
            _agptBlockService = agptBlockService; 
        }

        [HttpGet]
        [Route("all")]
        public async Task<IActionResult> GetAll()
        {
            var agptBlocks = await _agptBlockService.GetAll();

            return Ok(agptBlocks);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] string id)
        {
            var agptBlock = await _agptBlockService.GetById(id);
            if (agptBlock == null)
            {
                return NotFound();
            }
            return Ok(agptBlock);
        }
    }
}
