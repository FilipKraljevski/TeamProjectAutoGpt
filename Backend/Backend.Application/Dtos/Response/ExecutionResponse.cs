using Backend.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Application.Dtos.Response
{
    public class ExecutionResponse
    {
        public int Id { get; set; }
        public string Input { get; set; }
        public string Output { get; set; }

        public DateTime DateTime { get; set; }
        public AgptBlockResponse AgptBlockResponse { get; set; }
    }
}
