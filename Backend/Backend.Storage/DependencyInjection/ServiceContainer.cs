using Backend.Storage.Data;
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


            return services;
        }
    }
}
