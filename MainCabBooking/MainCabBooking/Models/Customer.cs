using System.ComponentModel.DataAnnotations;

namespace MainCabBooking.Models
{
    public class Customer
    {
        [Key]
        public int CustomerId { get; set; }

        [Required]
        [StringLength(50)]
        public string CustomerName { get; set; } = null!;

        [Required]
        [StringLength(10)]
        public string Gender { get; set; } = null!;

        [Required]
        public long ContactNumber { get; set; }

        [Required]
        [StringLength(50)]
        public string Email { get; set; } = null!;

        //[Required]
        //[StringLength(50)]
        //public string PaymentMethod { get; set; } = string.Empty;

        [Required]
        [StringLength(50)]
        public string? Username { get; set; }
        [Required]
        [StringLength(50)]
        // [DataType(DataType.Password)]
        public string? Password { get; set; }
    }
}
