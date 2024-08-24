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
    public class AgptBlockRepository : IAgptBlockRepository
    {
        private readonly AppDbContext _context;

        public AgptBlockRepository(AppDbContext context)
        {
            _context = context; 
        }
        public async Task<List<AgptBlock>> GetAllAsync()
        {
            return await _context.AgptBlocks.ToListAsync();
        }

        public async Task<AgptBlock?> GetByIdAsync(string id)
        {
            return await _context.AgptBlocks.FindAsync(id);
        }
    }
}
