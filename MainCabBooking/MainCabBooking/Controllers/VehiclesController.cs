using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MainCabBooking.Models;
using Azure.Messaging.EventGrid;
using Azure;

namespace MainCabBooking.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehiclesController : ControllerBase
    {
        private readonly MainProjectDb _context;

        public VehiclesController(MainProjectDb context)
        {
            _context = context;
        }

        // GET: api/Vehicles
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Vehicle>>> Getvehicles()
        {
          if (_context.vehicles == null)
          {
              return NotFound();
          }
            return await _context.vehicles.ToListAsync();
        }

        // GET: api/Vehicles/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Vehicle>> GetVehicle(int id)
        {
            string topicEndpoint = "https://cabeventgrid.eastus-1.eventgrid.azure.net/api/events";
            string topicKey = "ImMC0vExl1zahCkuvkkEaWR3T1YvIiVYQ6kQrrsCVig=";
            if (_context.vehicles == null)
          {
              return NotFound();
          }
            var vehicle = await _context.vehicles.FindAsync(id);

            if (vehicle == null)
            {
                return NotFound();
            }
            Uri endpoint = new Uri(topicEndpoint);
            AzureKeyCredential credential = new AzureKeyCredential(topicKey);
            EventGridPublisherClient client = new EventGridPublisherClient(endpoint, credential);


            EventGridEvent firstEvent = new EventGridEvent(
             subject: $"Vehicle viewed by Customer",
             eventType: "Vehicle viewed",
             dataVersion: "1.0",
             data: vehicle
        );
            await client.SendEventAsync(firstEvent);
            // Return the product

            return vehicle;
        }

        // PUT: api/Vehicles/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutVehicle(int id, Vehicle vehicle)
        {
            if (id != vehicle.VehicleId)
            {
                return BadRequest();
            }

            _context.Entry(vehicle).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VehicleExists(id))
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

        // POST: api/Vehicles
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Vehicle>> PostVehicle(Vehicle vehicle)
        {
          if (_context.vehicles == null)
          {
              return Problem("Entity set 'MainProjectDb.vehicles'  is null.");
          }
            _context.vehicles.Add(vehicle);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetVehicle", new { id = vehicle.VehicleId }, vehicle);
        }

        // DELETE: api/Vehicles/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVehicle(int id)
        {
            if (_context.vehicles == null)
            {
                return NotFound();
            }
            var vehicle = await _context.vehicles.FindAsync(id);
            if (vehicle == null)
            {
                return NotFound();
            }

            _context.vehicles.Remove(vehicle);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool VehicleExists(int id)
        {
            return (_context.vehicles?.Any(e => e.VehicleId == id)).GetValueOrDefault();
        }
    }
}
