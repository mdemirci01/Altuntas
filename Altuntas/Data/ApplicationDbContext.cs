using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Altuntas.Data
{
    public class ApplicationDbContext:DbContext
    {
      public DbSet<Altuntas.Models.Sale> Sales { get; set; }
      public DbSet<Altuntas.Models.Seller> Sellers { get; set; }
      public DbSet<Altuntas.Models.Buyer> Buyers { get; set; }

      public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options):base(options)
      {

      }

      protected override void OnModelCreating(ModelBuilder modelBuilder)
      {
        base.OnModelCreating(modelBuilder);
      }

    }
}
