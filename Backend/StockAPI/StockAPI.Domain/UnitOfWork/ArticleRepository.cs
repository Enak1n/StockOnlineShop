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
    public class ArticleRepository : GenericRepository<Article>, IArticleRepository
    {
        public ArticleRepository(Context context) : base(context)
        {

        }
    }
}
