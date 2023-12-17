using System.ComponentModel.DataAnnotations;

namespace MainCabBooking.Models
{
    public class AdminLogin
    {
        [Key]
        public int AdminId { get; set; }

        [Required]
        [StringLength(50)]
        public string? Username { get; set; }
        [Required]
        [StringLength(50)]
        // [DataType(DataType.Password)]
        public string? Password { get; set; }
    }
}
