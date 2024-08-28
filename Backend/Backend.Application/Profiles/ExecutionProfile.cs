using AutoMapper;
using Backend.Application.Dtos.Response;
using Backend.Domain.Entities;

namespace Backend.Application.Profiles
{
    public class ExecutionProfile : Profile
    {
        public ExecutionProfile()
        {
            CreateMap<Execution, ExecutionResponse>()
                .ForMember(dest => dest.AgptBlockResponse, opt => opt.MapFrom(src => src.AgptBlock));
        }
    }
}
