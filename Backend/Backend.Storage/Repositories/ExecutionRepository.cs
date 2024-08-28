using Backend.Application.Interfaces;
using Backend.Domain.Entities;
using Backend.Storage.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Storage.Repositories
{
    public class ExecutionRepository : IExecutionRepository
    {
        private readonly AppDbContext _context;

        public ExecutionRepository(AppDbContext context)
        {
            _context = context;
        }
        public async Task<Execution> CreateAsync(Execution execution)
        {
            await _context.Executions.AddAsync(execution);
            await _context.SaveChangesAsync();

            return execution;
        }
    }
}
