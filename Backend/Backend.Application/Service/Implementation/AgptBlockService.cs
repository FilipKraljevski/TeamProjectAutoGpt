using AutoMapper;
using Backend.Application.Dtos;
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
        public async Task<List<AgptBlockDto>> GetAll()
        {
            var agptBlocks =  await _agptBlockRepository.GetAllAsync();
            return agptBlocks.Select(block => _mapper.Map<AgptBlockDto>(block)).ToList();
        }

        public async Task<AgptBlockDto> GetById(string id)
        {
            var agptBlock = await _agptBlockRepository.GetByIdAsync(id);

            if (agptBlock == null)
            {
                return null;
            }
            return _mapper.Map<AgptBlockDto>(agptBlock);
        }
    }
}
