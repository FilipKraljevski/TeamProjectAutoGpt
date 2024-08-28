using Backend.Domain.Entities;
using Backend.Application.Dtos;


namespace Backend.Application.Service.Interfaces
{
    public interface IAgptBlockService
    {
        Task<List<AgptBlockDto>> GetAll();
        Task<AgptBlockDto> GetById(string id);
    }
}
