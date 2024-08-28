using Backend.Application.Dtos;
using Backend.Application.Interfaces;
using Backend.Application.Service.Interfaces;
using Backend.Domain.Entities;

namespace Backend.Application.Service.Implementation
{
    public class ExecutionService : IExecutionService
    {
        private readonly IExecutionRepository _executionRepository;

        public ExecutionService(IExecutionRepository executionRepository)
        {
            _executionRepository = executionRepository;
        }
        public async Task<Execution> Create(ExecutionDto executionDto, string userId, string agptBlockId)
        {
            Execution execution = new Execution
            {
                Input = executionDto.Input,
                Output = executionDto.Output,
                DateTime = executionDto.DateTime,
                ApplicationUserId = userId,
                AgptBlockId = agptBlockId
            };

            return await _executionRepository.CreateAsync(execution);
        }
    }
}
