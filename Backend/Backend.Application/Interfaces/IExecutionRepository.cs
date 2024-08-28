﻿using Backend.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Application.Interfaces
{
    public interface IExecutionRepository
    {
        Task<Execution?> GetByIdAsync(int id); 
        Task<List<Execution>> GetAllAsync(string userId);
        Task<List<Execution>> GetAllByAgptBlockAsync(string userId, string agptBlockId);
        Task<List<Execution>> GetAllByDateAsync(string userId, DateTime dateTime);
        Task<List<Execution>> GetAllByAgptBlockAndDateAsync(string userId, string agptBlockId, DateTime dateTime);
        Task<Execution> CreateAsync(Execution execution);
        Task<bool> DeleteByIdAsync(int id);
    }
}
