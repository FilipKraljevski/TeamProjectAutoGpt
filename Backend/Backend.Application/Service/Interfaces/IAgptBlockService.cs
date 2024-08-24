using Backend.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Application.Service.Interfaces
{
    public interface IAgptBlockService
    {
        Task<List<AgptBlock>> GetAll();
        Task<AgptBlock> GetById(string id);
    }
}
