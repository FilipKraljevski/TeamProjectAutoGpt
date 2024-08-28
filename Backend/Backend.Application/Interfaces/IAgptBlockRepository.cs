using Backend.Domain.Entities;


namespace Backend.Application.Interfaces
{
    public interface IAgptBlockRepository
    {
        Task<List<AgptBlock>> GetAllAsync();
        Task<AgptBlock?> GetByIdAsync(string id);
    }
}
