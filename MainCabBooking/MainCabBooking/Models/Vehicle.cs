using System.ComponentModel.DataAnnotations;

namespace MainCabBooking.Models
{
    public class Vehicle
    {
        [Key]
        public int VehicleId { get; set; }

        [Required]
        [StringLength(50)]
        public string VehicleName { get; set; } = null!;

        [Required]
        [StringLength(50)]
        public string VehicleType { get; set; } = null!;

        [Required]
        [StringLength(50)]
        public string Capacity { get; set; } = null!;

        [Required]
        public int FarePerKm { get; set; }

        [Required]
        public bool Availability { get; set; }
    }
}
