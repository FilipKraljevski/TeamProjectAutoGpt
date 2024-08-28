using Backend.Application.Dtos.Request;
using Backend.Application.Dtos.Response;

namespace Backend.Application.Service.Interfaces
{
    public interface IExecutionService
    {
        Task<ExecutionResponse> GetById(int id);
        Task<List<ExecutionResponse>> GetAllFiltered(string userId, string? agptBlockId, DateTime? dateTime);
        Task<ExecutionResponse> Create(ExecutionRequest executionDto, string userId, string agptBlockId);
        Task<bool> DeleteById(int id);
    }
}
