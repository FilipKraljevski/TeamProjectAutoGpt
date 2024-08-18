using Backend.Domain.Entities;

namespace Backend.Application.Service.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(ApplicationUser user);
    }
}
