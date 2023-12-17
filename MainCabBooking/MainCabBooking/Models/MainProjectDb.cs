using Microsoft.EntityFrameworkCore;

namespace MainCabBooking.Models
{
    public class MainProjectDb : DbContext
    {
        public MainProjectDb(DbContextOptions<MainProjectDb> options) : base(options) { }
        public DbSet<AdminLogin> logins { get; set; }
        public DbSet<Customer> customers { get; set; }
        public DbSet<Vehicle> vehicles { get; set; }
        public DbSet<Driver> drivers { get; set; }
        public DbSet<Routing> routing { get; set; }
        public DbSet<BookingDetails> bookings { get; set; }
    }
}
