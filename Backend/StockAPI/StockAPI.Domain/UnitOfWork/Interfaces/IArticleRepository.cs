using StockAPI.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StockAPI.Domain.UnitOfWork.Interfaces
{
    public interface IArticleRepository : IGenericRepository<Article>
    {
    }
}
