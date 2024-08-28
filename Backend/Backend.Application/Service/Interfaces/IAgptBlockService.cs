using Backend.Application.Dtos.Response;


namespace Backend.Application.Service.Interfaces
{
    public interface IAgptBlockService
    {
        Task<List<AgptBlockResponse>> GetAll();
        Task<AgptBlockResponse> GetById(string id);
    }
}
