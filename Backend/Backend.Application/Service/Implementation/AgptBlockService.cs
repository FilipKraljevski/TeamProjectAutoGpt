using Backend.Application.Interfaces;
using Backend.Application.Service.Interfaces;
using Backend.Domain.Entities;


namespace Backend.Application.Service.Implementation
{
    public class AgptBlockService : IAgptBlockService
    {
        private readonly IAgptBlockRepository _agptBlockRepository;

        public AgptBlockService(IAgptBlockRepository agptBlockRepository)
        {
            _agptBlockRepository = agptBlockRepository;
        }
        public Task<List<AgptBlock>> GetAll()
        {
            var agptBlocks = _agptBlockRepository.GetAllAsync();
            return agptBlocks;
        }

        public Task<AgptBlock> GetById(string id)
        {
            var agptBlock = _agptBlockRepository.GetByIdAsync(id);

            if (agptBlock == null)
            {
                return null;
            }
            return agptBlock;
        }
    }
}
