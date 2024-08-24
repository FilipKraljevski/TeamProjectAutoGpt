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

            //AgptBlock
            builder.Entity<AgptBlock>()
                .HasKey(b => b.Id);

            builder.Entity<AgptBlock>()
                .Property(b => b.Name)
                .IsRequired();


            //Execution
            builder.Entity<Execution>()
                .HasKey(e => e.Id);

            builder.Entity<Execution>()
                .Property(e => e.Input)
                .IsRequired();

            builder.Entity<Execution>()
                .Property(e => e.Output)
                .IsRequired();

            builder.Entity<Execution>()
                .Property(e => e.DateTime)
                .IsRequired();

            builder.Entity<Execution>()
                .HasOne(e => e.ApplicationUser)
                .WithMany(u => u.Executions)
                .HasForeignKey(e => e.ApplicationUserId)
                .IsRequired();

            builder.Entity<Execution>()
                .HasOne(e => e.AgptBlock)
                .WithMany(b =>  b.Executions)
                .HasForeignKey(e => e.AgptBlockId)
                .IsRequired();
        }

    }
}
