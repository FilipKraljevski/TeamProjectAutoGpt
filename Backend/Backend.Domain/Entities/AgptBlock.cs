using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Backend.Domain.Entities
{
    public class AgptBlock
    {
        public string Id { get; set; }
        public string Name { get; set; }

        public ICollection<Execution> Executions { get; set; }
    }
}
