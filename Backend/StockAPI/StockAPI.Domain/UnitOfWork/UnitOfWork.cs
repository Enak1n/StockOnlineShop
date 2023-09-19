using Microsoft.Extensions.Caching.Memory;
using StockAPI.Domain.DataBase;
using StockAPI.Domain.UnitOfWork.Interfaces;

namespace StockAPI.Domain.UnitOfWork
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly Context _context;

        public UnitOfWork(Context context)
        {
            _context = context;
            Items = new ItemRepository(context);
            Users = new UserRepository(context);
        }

        public IItemRepository Items { get; private set;}
        public IUserRepository Users { get; private set;}

        public UnitOfWork(IItemRepository itemRepository, IUserRepository userRepository)
        {
            Items = itemRepository;
            Users = userRepository;
        }

        public async Task Save()
        {
            await _context.SaveChangesAsync();
        }

        public void Dispose()
        {
            _context.Dispose();
        }
    }
}
