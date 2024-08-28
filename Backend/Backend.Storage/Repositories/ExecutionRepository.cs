using Backend.Application.Interfaces;
using Backend.Domain.Entities;
using Backend.Storage.Data;
using Microsoft.EntityFrameworkCore;
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

        public async Task<Execution?> GetByIdAsync(int id)
        {
            return await _context.Executions
                .Include(e => e.AgptBlock)
                .FirstOrDefaultAsync(e => e.Id == id);
        }
        public async Task<Execution> CreateAsync(Execution execution)
        {
            await _context.Executions.AddAsync(execution);
            await _context.SaveChangesAsync();

            return execution;
        }

        public async Task<List<Execution>> GetAllAsync(string userId)
        {
            return await _context.Executions.Include(e => e.AgptBlock)
                    .Where(e => e.ApplicationUserId.Equals(userId))
                    .ToListAsync();
        }

        public async Task<List<Execution>> GetAllByAgptBlockAsync(string userId, string agptBlockId)
        {
            return await _context.Executions.Include(e => e.AgptBlock)
                    .Where(e => e.ApplicationUserId.Equals(userId))
                    .Where(e => e.AgptBlock.Id == agptBlockId)
                    .ToListAsync();
        }

        public async Task<List<Execution>> GetAllByDateAsync(string userId, DateTime dateTime)
        {
            return await _context.Executions.Include(e => e.AgptBlock)
                    .Where(e => e.ApplicationUserId.Equals(userId))
                    .Where(e => e.DateTime.Date == dateTime.Date)
                    .ToListAsync();
        }

        public async Task<List<Execution>> GetAllByAgptBlockAndDateAsync(string userId, string agptBlockId, DateTime dateTime)
        {
            return await _context.Executions.Include(e => e.AgptBlock)
                    .Where(e => e.ApplicationUserId.Equals(userId))
                    .Where(e => e.AgptBlock.Id == agptBlockId)
                    .Where(e => e.DateTime.Date == dateTime.Date)
                    .ToListAsync();
        }

        public async Task<bool> DeleteByIdAsync(int id)
        {
            var execution = await _context.Executions.FindAsync(id);

            if (execution != null)
            {
                _context.Executions.Remove(execution);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }
    }
}
