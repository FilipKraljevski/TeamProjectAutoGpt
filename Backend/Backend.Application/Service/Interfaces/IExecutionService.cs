﻿using Backend.Application.Dtos.Request;
using Backend.Application.Dtos.Response;
using Backend.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Application.Service.Interfaces
{
    public interface IExecutionService
    {
        Task<ExecutionResponse> Create(ExecutionRequest executionDto, string userId, string agptBlockId);
    }
}
