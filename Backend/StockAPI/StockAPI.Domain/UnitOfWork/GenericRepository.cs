using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Caching.Memory;
using StockAPI.Domain.DataBase;
using StockAPI.Domain.UnitOfWork.Interfaces;
using System.Linq.Expressions;

namespace StockAPI.Domain.UnitOfWork
{
    public class GenericRepository<T> : IGenericRepository<T> where T : class
    {
        private Context _context;

        public GenericRepository(Context context)
        {
            _context = context;
        }

        public async Task Add(T entity)
        {
            await _context.Set<T>().AddAsync(entity);
        }

        public async Task AddRange(T entity)
        {
            await _context.Set<T>().AddRangeAsync(entity);
        }

        public async Task Edit(T entity)
        {
            _context.Update(entity);
            await _context.SaveChangesAsync();
        }

        public async Task<T> Find(Expression<Func<T, bool>> predicate)
        {
            return await _context.Set<T>().Where(predicate).FirstOrDefaultAsync();
        }

        public async Task<List<T>> FindRange(Expression<Func<T, bool>> predicate)
        {
            return await _context.Set<T>().Where(predicate).ToListAsync();
        }

        public async Task<List<T>> GetAll()
        {
            return await _context.Set<T>().ToListAsync(); ;
        }

        public async Task<T> GetById(Guid id)
        {
            return await _context.Set<T>().FindAsync(id);
        }

        public async Task Remove(T entity)
        {
            await Task.Run(() => _context.Set<T>().Remove(entity));
        }

        public async Task RemoveRange(List<T> entities)
        {
            await Task.Run(() => _context.Set<T>().RemoveRange(entities));
        }
    }
}
