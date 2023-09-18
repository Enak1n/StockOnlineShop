using Microsoft.EntityFrameworkCore;
using Npgsql;
using StockAPI.Domain.Entities;

namespace StockAPI.Domain.DataBase
{
    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options) :
               base(options)
        {
            Database.EnsureCreated();
        }

        public DbSet<Item> Items { get; set; }
        public DbSet<User> Users { get; set; }

    }
}
