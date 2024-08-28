using Backend.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Application.Dtos
{
    public class ExecutionDto
    {
        public string Input { get; set; }
        public string Output { get; set; }

        public DateTime DateTime { get; set; }

    }
}
