using AuthAPI.Models;
using AutoMapper;
using StockAPI.Domain.Entities;

namespace AuthAPI.Helpers
{
    public class MappingProfile : Profile
    {
        public MappingProfile() 
        {
            CreateMap<UserRegistration, User>();
        }
    }
}
