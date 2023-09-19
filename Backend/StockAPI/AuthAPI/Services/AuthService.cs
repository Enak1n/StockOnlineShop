using AuthAPI.Models;
using AutoMapper;
using StockAPI.Domain.Entities;
using StockAPI.Domain.UnitOfWork.Interfaces;

namespace AuthAPI.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUnitOfWork _unitOfWork;
        private IMapper _mapper;

        public AuthService(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
        }

        public Task Login(string login, string password)
        {
            throw new NotImplementedException();
        }

        public async Task Register(UserRegistration user)
        {
            var customer = _mapper.Map<UserRegistration, User>(user);
            await _unitOfWork.Users.Add(customer);
            await _unitOfWork.Save();
        }
    }
}
