using AuthAPI.Models;

namespace AuthAPI.Services
{
    public interface IAuthService
    {
        Task Register(UserRegistration user);
        Task Login(string login, string password);
    }
}
