using AuthAPI.Models;
using AuthAPI.Services.Interfaces;
using AutoMapper;
using Microsoft.IdentityModel.Tokens;
using StockAPI.Domain.Entities;
using StockAPI.Domain.UnitOfWork.Interfaces;
using System.Security.Claims;

namespace AuthAPI.Services
{
    public class AuthService : IAuthService
    {
        private readonly IUnitOfWork _unitOfWork;
        private IMapper _mapper;
        private IPasswordHasher _passwordHasher;
        private ITokenService _tokenService;

        public AuthService(IUnitOfWork unitOfWork, IMapper mapper, IPasswordHasher passwordHasher, ITokenService tokenService)
        {
            _unitOfWork = unitOfWork;
            _mapper = mapper;
            _passwordHasher = passwordHasher;
            _tokenService = tokenService;
        }

        public async Task<AuthenticateResponse> Login(string login, string password)
        {
            var user = await _unitOfWork.Users.Find(u => u.EmailAddress == login);

            if(user == null)
            {
                throw new SecurityTokenException("Invalid Email Address or password!");
            }

            if (_passwordHasher.Verify(user.Password, password))
            {
                var claims = new List<Claim>
                {
                    new Claim(ClaimTypes.Name, user.EmailAddress)
                };

                var accessToken = _tokenService.GenerateAccessToken(claims);
                var refreshToken = _tokenService.GenerateRefreshToken();

                return new AuthenticateResponse
                {
                    AccessToken = accessToken,
                    RefreshToken = refreshToken
                };
            }
            else
            {
                throw new SecurityTokenException("Invalid Email address or password!");
            }
        }

        public async Task Register(UserRegistration user)
        {
            var emailAddress = await _unitOfWork.Users.Find(u => u.EmailAddress == user.EmailAddress);

            if(emailAddress == null)
            {
                throw new Exception("Email Address has been already used!");
            }
            
            var customer = _mapper.Map<UserRegistration, User>(user);
            var hash = _passwordHasher.Hash(user.Password);
            customer.Password = hash;

            await _unitOfWork.Users.Add(customer);
            await _unitOfWork.Save();
        }
    }
}
