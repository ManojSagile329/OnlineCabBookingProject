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
    public class RoutingsController : ControllerBase
    {
        private readonly MainProjectDb _context;

        public RoutingsController(MainProjectDb context)
        {
            _context = context;
        }

        // GET: api/Routings
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Routing>>> Getrouting()
        {
          if (_context.routing == null)
          {
              return NotFound();
          }
            return await _context.routing.ToListAsync();
        }

        // GET: api/Routings/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Routing>> GetRouting(int id)
        {
          if (_context.routing == null)
          {
              return NotFound();
          }
            var routing = await _context.routing.FindAsync(id);

            if (routing == null)
            {
                return NotFound();
            }

            return routing;
        }

        // PUT: api/Routings/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutRouting(int id, Routing routing)
        {
            if (id != routing.RouteId)
            {
                return BadRequest();
            }

            _context.Entry(routing).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RoutingExists(id))
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

        // POST: api/Routings
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Routing>> PostRouting(Routing routing)
        {
          if (_context.routing == null)
          {
              return Problem("Entity set 'MainProjectDb.routing'  is null.");
          }
            _context.routing.Add(routing);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetRouting", new { id = routing.RouteId }, routing);
        }

        // DELETE: api/Routings/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteRouting(int id)
        {
            if (_context.routing == null)
            {
                return NotFound();
            }
            var routing = await _context.routing.FindAsync(id);
            if (routing == null)
            {
                return NotFound();
            }

            _context.routing.Remove(routing);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool RoutingExists(int id)
        {
            return (_context.routing?.Any(e => e.RouteId == id)).GetValueOrDefault();
        }
    }
}
