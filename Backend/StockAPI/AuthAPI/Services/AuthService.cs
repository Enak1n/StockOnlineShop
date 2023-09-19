using AuthAPI.Models;
using StockAPI.Domain.UnitOfWork.Interfaces;

namespace AuthAPI.Services
{
    public class AuthService : IAuthService
    {
        private IUnitOfWork _unitOfWork;

        public AuthService(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;   
        }

        public Task Login(string login, string password)
        {
            throw new NotImplementedException();
        }

        public async Task Register(UserRegistration user)
        {
            
        }
    }
}
