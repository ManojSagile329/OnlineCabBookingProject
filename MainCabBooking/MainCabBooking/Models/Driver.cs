using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace MainCabBooking.Models
{
    public class Driver
    {
        [Key]
        public int DriverId { get; set; }

        [Required]

        public string DriverName { get; set; } = null!;

        [Required]
        [StringLength(16)]

        public string LicenseNo { get; set; } = null!;

        [Required]
        public long ContactNumber { get; set; }
        [Required]
        public string DriverRating { get; set; } = null!;

        [Required]
        [ForeignKey("VehicleId")]
        public int VehicleId { get; set; }


        public virtual Vehicle? Vehicle { get; set; }
    }
}
