using AuthAPI.Models;
using AuthAPI.Services.Interfaces;
using AutoMapper;
using StockAPI.Domain.Entities;
using StockAPI.Domain.UnitOfWork.Interfaces;

namespace AuthAPI.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUnitOfWork _unitOfWork;
        private IMapper _mapper;
        private IPasswordHasher _passwordHasher;

        public AuthService(IUnitOfWork unitOfWork, IMapper mapper, IPasswordHasher passwordHasher)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _passwordHasher = passwordHasher;
        }

        public Task Login(string login, string password)
        {
            throw new NotImplementedException();
        }

        public async Task Register(UserRegistration user)
        {
            var customer = _mapper.Map<UserRegistration, User>(user);
            var hash = _passwordHasher.Hash(user.Password);
            customer.Password = hash;

            await _unitOfWork.Users.Add(customer);
            await _unitOfWork.Save();
        }
    }
}
