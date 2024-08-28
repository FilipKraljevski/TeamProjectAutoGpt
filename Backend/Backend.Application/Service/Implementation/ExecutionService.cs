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

        public async Task<ExecutionResponse> GetById(int id)
        {
            var execution = await _executionRepository.GetByIdAsync(id);

            if (execution == null)
            {
                throw new InvalidOperationException("Execution does not exist");
            }
            return _mapper.Map<ExecutionResponse>(execution);
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

        public async Task<List<ExecutionResponse>> GetAllFiltered(string userId, string? agptBlockId, DateTime? dateTime)
        {
            var executions = new List<Execution>();


            if(agptBlockId != null && dateTime.HasValue)
            {
                executions = await _executionRepository.GetAllByAgptBlockAndDateAsync(userId, agptBlockId, dateTime.Value);
            }
            else if(dateTime.HasValue)
            {
                executions = await _executionRepository.GetAllByDateAsync(userId, dateTime.Value);
            }
            else if(agptBlockId != null)
            {
                executions = await _executionRepository.GetAllByAgptBlockAsync(userId, agptBlockId);
            }
            else
            {
                executions = await _executionRepository.GetAllAsync(userId);
            }

            var executionResponses = executions.Select(e => _mapper.Map<ExecutionResponse>(e)).ToList();

            return executionResponses;
        }

        public async Task<bool> DeleteById(int id)
        {
            return await _executionRepository.DeleteByIdAsync(id);
        }
    }
}
