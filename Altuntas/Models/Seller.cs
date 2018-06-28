using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Altuntas.Models
{
    public class Seller
    {
      public int Id { get; set; }
      [Display(Name="Ad")]
      [StringLength(200)]
      public string Name { get; set; }
      [Display(Name="Logo")]
      [StringLength(200)]
      public string Logo { get; set; }
      [Display(Name="Açıklama")]
      public string Description { get; set; }
      public virtual ICollection<Sale> Sales { get; set; }
    }
}
