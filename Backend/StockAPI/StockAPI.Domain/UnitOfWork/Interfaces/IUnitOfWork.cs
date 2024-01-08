using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StockAPI.Domain.UnitOfWork.Interfaces
{
    public interface IUnitOfWork : IDisposable
    {
        IUserRepository Users { get; }
        IItemRepository Items { get; }
        IArticleRepository Articles { get; }

        Task Save();
    }
}
