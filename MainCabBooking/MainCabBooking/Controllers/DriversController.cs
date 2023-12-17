using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MainCabBooking.Models;

namespace MainCabBooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DriversController : ControllerBase
    {
        private readonly MainProjectDb _context;

        public DriversController(MainProjectDb context)
        {
            _context = context;
        }

        // GET: api/Drivers
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Driver>>> Getdrivers()
        {
          if (_context.drivers == null)
          {
              return NotFound();
          }
            return await _context.drivers.ToListAsync();
        }

        // GET: api/Drivers/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Driver>> GetDriver(int id)
        {
          if (_context.drivers == null)
          {
              return NotFound();
          }
            var driver = await _context.drivers.FindAsync(id);

            if (driver == null)
            {
                return NotFound();
            }

            return driver;
        }

        // PUT: api/Drivers/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutDriver(int id, Driver driver)
        {
            if (id != driver.DriverId)
            {
                return BadRequest();
            }

            _context.Entry(driver).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!DriverExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Drivers
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Driver>> PostDriver(Driver driver)
        {
            if (ModelState.IsValid)
            {
                // Check if the Vehicle with the provided ID exists
                var existingVehicle = _context.vehicles.Find(driver.VehicleId);

                if (existingVehicle != null)
                {
                    // Vehicle exists, use the existing one
                    driver.Vehicle = existingVehicle;

                    _context.drivers.Add(driver);
                    _context.SaveChanges();
                    return Ok(driver);
                }
                else
                {
                    // Vehicle does not exist, return a 404 Not Found response
                    return NotFound("Driver not found");
                }
            }
            return BadRequest(ModelState);
        }
        //{
        //  if (_context.drivers == null)
        //  {
        //      return Problem("Entity set 'MainProjectDb.drivers'  is null.");
        //  }
        //    _context.drivers.Add(driver);
        //    await _context.SaveChangesAsync();

        //    return CreatedAtAction("GetDriver", new { id = driver.DriverId }, driver);
        //}

        // DELETE: api/Drivers/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDriver(int id)
        {
            if (_context.drivers == null)
            {
                return NotFound();
            }
            var driver = await _context.drivers.FindAsync(id);
            if (driver == null)
            {
                return NotFound();
            }

            _context.drivers.Remove(driver);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool DriverExists(int id)
        {
            return (_context.drivers?.Any(e => e.DriverId == id)).GetValueOrDefault();
        }
    }
}
