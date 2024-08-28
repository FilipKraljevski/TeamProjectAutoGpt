using Backend.Application.Interfaces;
using Backend.Domain.Entities;
using Backend.Storage.Data;
using Microsoft.EntityFrameworkCore;

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
