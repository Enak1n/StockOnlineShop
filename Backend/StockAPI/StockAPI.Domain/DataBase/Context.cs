using Microsoft.EntityFrameworkCore;
using StockAPI.Domain.Entities;

namespace StockAPI.Domain.DataBase
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) :
               base(options)
        {
        }

        public DbSet<Item> Items { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Article> Articles { get; set; }
    }
}
