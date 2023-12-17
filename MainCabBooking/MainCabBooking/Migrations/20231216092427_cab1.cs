using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace MainCabBooking.Migrations
{
    public partial class cab1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_bookings",
                table: "bookings");

            migrationBuilder.RenameTable(
                name: "bookings",
                newName: "bookingss");

            migrationBuilder.AddPrimaryKey(
                name: "PK_bookingss",
                table: "bookingss",
                column: "BookingId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_bookingss",
                table: "bookingss");

            migrationBuilder.RenameTable(
                name: "bookingss",
                newName: "bookings");

            migrationBuilder.AddPrimaryKey(
                name: "PK_bookings",
                table: "bookings",
                column: "BookingId");
        }
    }
}
