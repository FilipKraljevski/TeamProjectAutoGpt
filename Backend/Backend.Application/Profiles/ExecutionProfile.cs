using AutoMapper;
using Backend.Application.Dtos.Response;
using Backend.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

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
