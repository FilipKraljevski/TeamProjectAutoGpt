using Backend.Application.Interfaces;
using Backend.Application.Service.Implementation;
using Backend.Application.Service.Interfaces;
using Backend.Storage.Data;
using Backend.Storage.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Backend.Storage.DependencyInjection
{
    public static class ServiceContainer
    {
        public static IServiceCollection StorageServices(this IServiceCollection services, string dbConn)

        {
            services.AddDbContext<AppDbContext>(options =>
            options.UseNpgsql(dbConn,
                b => b.MigrationsAssembly(typeof(ServiceContainer).Assembly.FullName)),
                ServiceLifetime.Scoped);

            services.AddScoped<IAgptBlockRepository, AgptBlockRepository>();
            services.AddScoped<IAgptBlockService, AgptBlockService>();

            services.AddScoped<IExecutionRepository, ExecutionRepository>();
            services.AddScoped<IExecutionService, ExecutionService>();


            return services;
        }
    }
}
