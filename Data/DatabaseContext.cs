using Microsoft.EntityFrameworkCore;
using FNFTAPP.Models;

namespace FNFTAPP.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {
        }
        public DbSet<User_Information> User_Accounts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source = fnftapp.db");
        }


    }
}
