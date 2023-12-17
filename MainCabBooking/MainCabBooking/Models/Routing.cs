using System.ComponentModel.DataAnnotations;

namespace MainCabBooking.Models
{
    public class Routing
    {
        [Key]
        public int RouteId { get; set; }

        [Required]
        [StringLength(50)]
        public string Source { get; set; } = null!;

        [Required]
        [StringLength(50)]
        public string Destination { get; set; } = null!;

        [Required]
        [StringLength(50)]
        public string Duration { get; set; } = null!;

        [Required]
        public int Distance { get; set; }
    }
}
