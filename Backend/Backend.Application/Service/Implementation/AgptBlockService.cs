using AutoMapper;
using Backend.Application.Dtos.Response;
using Backend.Application.Interfaces;
using Backend.Application.Service.Interfaces;
using Backend.Domain.Entities;


namespace Backend.Application.Service.Implementation
{
    public class AgptBlockService : IAgptBlockService
    {
        private readonly IAgptBlockRepository _agptBlockRepository;
        private readonly IMapper _mapper;

        public AgptBlockService(IAgptBlockRepository agptBlockRepository, IMapper mapper)
        {
            _agptBlockRepository = agptBlockRepository;
            _mapper = mapper;
        }
        public async Task<List<AgptBlockResponse>> GetAll()
        {
            var agptBlocks =  await _agptBlockRepository.GetAllAsync();
            return agptBlocks.Select(block => _mapper.Map<AgptBlockResponse>(block)).ToList();
        }

        public async Task<AgptBlockResponse> GetById(string id)
        {
            var agptBlock = await _agptBlockRepository.GetByIdAsync(id);

            if (agptBlock == null)
            {
                throw new InvalidOperationException("AgptBlock does not exist");
            }
            return _mapper.Map<AgptBlockResponse>(agptBlock);
        }
    }
}
