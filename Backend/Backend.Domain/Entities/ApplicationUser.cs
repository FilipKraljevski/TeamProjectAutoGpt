using Microsoft.AspNetCore.Identity;

namespace Backend.Domain.Entities
{
    public class ApplicationUser : IdentityUser
    {
        public ICollection<Execution> Executions { get; set; }
    }
}
