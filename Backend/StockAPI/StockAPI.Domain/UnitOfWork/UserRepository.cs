using Microsoft.Extensions.Caching.Memory;
using StockAPI.Domain.DataBase;
using StockAPI.Domain.Entities;
using StockAPI.Domain.UnitOfWork.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StockAPI.Domain.UnitOfWork
{
    public class UserRepository : GenericRepository<User>, IUserRepository
    {
        public UserRepository(Context context) : base(context) 
        {
            
        }
    }
}
