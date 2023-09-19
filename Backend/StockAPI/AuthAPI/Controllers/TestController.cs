using Microsoft.AspNetCore.Mvc;
using StockAPI.Domain.DataBase;

namespace AuthAPI.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        private Context _context;

        public TestController(Context context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult Test() 
        {
            var all = _context.Users.ToList();
            return Ok(all);
        }
    }
}
