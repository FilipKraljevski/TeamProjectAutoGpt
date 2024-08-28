using AutoMapper;
using Backend.Application.Dtos.Request;
using Backend.Application.Dtos.Response;
using Backend.Application.Interfaces;
using Backend.Application.Service.Interfaces;
using Backend.Domain.Entities;

namespace Backend.Application.Service.Implementation
{
    public class ExecutionService : IExecutionService
    {
        private readonly IExecutionRepository _executionRepository;
        private readonly IMapper _mapper;

        public ExecutionService(IExecutionRepository executionRepository, IMapper mapper)
        {
            _executionRepository = executionRepository;
            _mapper = mapper;
        }
        public async Task<ExecutionResponse> Create(ExecutionRequest executionDto, string userId, string agptBlockId)
        {
            Execution execution = new Execution
            {
                Input = executionDto.Input,
                Output = executionDto.Output,
                DateTime = executionDto.DateTime,
                ApplicationUserId = userId,
                AgptBlockId = agptBlockId
            };

            var savedExecution = await _executionRepository.CreateAsync(execution);

            return _mapper.Map<ExecutionResponse>(savedExecution);
        }
    }
}
