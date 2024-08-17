using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Backend.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Backend.Storage.Data
{
    public class AppDbContext : IdentityDbContext<ApplicationUser>
    {
        public AppDbContext(DbContextOptions dbContextOptions)
            : base(dbContextOptions)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
        }

    }
}
