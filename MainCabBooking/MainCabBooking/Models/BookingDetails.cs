using System.ComponentModel.DataAnnotations;

namespace MainCabBooking.Models
{
    public class BookingDetails
    {

        [Key]
        public int BookingId { get; set; }

        [Required]
        //[ForeignKey("CustomerId")]
        public int CustomerId { get; set; }

        [Required]
        [StringLength(50)]
        public string? CustomerName { get; set; }

        [Required]
        public long MobileNumber { get; set; }

        [Required]
        [StringLength(50)]
        public string? EmailId { get; set; }

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

        [Required]
        [StringLength(50)]
        public string VehicleName { get; set; } = null!;

        [Required]
        [StringLength(50)]
        public string VehicleType { get; set; } = null!;

        [Required]
        public int FarePerKm { get; set; }

        //public virtual Customer Customer { get; set; }

        //[Required]
        //[ForeignKey("VehicleId")]
        //public int VehicleId { get; set; }


        //public virtual Vehicle Vehicle { get; set; }



        //[Required]
        //[ForeignKey("RouteId")]
        //public int RouteId { get; set; }

        //public virtual Routing Routing { get; set; }

        //[Required]
        //public int DriverId { get; set; }
        //[ForeignKey("DriverId")]
        //public Driver Driver { get; set; }

        [Required]
        public DateTime BookingDate { get; set; }

        //[Required]
        //public bool PaymentStatus { get; set; } = false;
    }
}
