using Microsoft.Extensions.Caching.Memory;
using StockAPI.Domain.DataBase;
using StockAPI.Domain.Entities;
using StockAPI.Domain.UnitOfWork.Interfaces;

namespace StockAPI.Domain.UnitOfWork
{
    public class ItemRepository : GenericRepository<Item>, IItemRepository
    {
        public ItemRepository(Context context, IMemoryCache cache) : base(context, cache)
        {
            
        }
    }
}
