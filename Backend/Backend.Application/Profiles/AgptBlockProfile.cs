using AutoMapper;
using Backend.Application.Dtos.Response;
using Backend.Domain.Entities;

namespace Backend.Application.Profiles
{
    public class AgptBlockProfile : Profile
    {
        public AgptBlockProfile()
        {
            CreateMap<AgptBlock, AgptBlockResponse>();
        }
    }
}
