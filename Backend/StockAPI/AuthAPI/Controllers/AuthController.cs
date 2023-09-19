using AuthAPI.Models;
using AuthAPI.Services;
using Microsoft.AspNetCore.Mvc;
using StockAPI.Domain.UnitOfWork.Interfaces;
using System.ComponentModel.DataAnnotations;

namespace AuthAPI.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private IAuthService _authService;
        private ILogger<AuthController> _logger;

        public AuthController(ILogger<AuthController> logger, IAuthService authService)
        {
            _logger = logger;
            _authService = authService;
        }

        [HttpPost]
        public async Task<IActionResult> Register(UserRegistration user)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                return Ok();
                await _authService.Register(user);
            }
            catch(Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
