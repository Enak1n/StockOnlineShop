using AuthAPI.Models;
using AuthAPI.Services.Interfaces;
using Microsoft.AspNetCore.Mvc;
using StockAPI.Domain.UnitOfWork.Interfaces;

namespace AuthAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TokenController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly ITokenService _tokenService;

        public TokenController(IUnitOfWork unitOfWork, ITokenService tokenService)
        {
            _unitOfWork = unitOfWork;
            _tokenService = tokenService;
        }

        [HttpPost]
        [Route("refresh")]
        public async Task<IActionResult> Refresh(TokenApiModel tokenApiModel)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid client request");

            string accessToken = tokenApiModel.AccessToken;
            string refreshToken = tokenApiModel.RefreshToken;

            var principal = _tokenService.GetPrincipalFromExpiredToken(accessToken);
            var username = principal.Identity.Name;

            var currentIdentityUser = await _unitOfWork.Users.Find(u => u.EmailAddress == username);

            if (currentIdentityUser is null || currentIdentityUser.RefreshToken != refreshToken
                 || currentIdentityUser.RefreshTokenExpiryTime <= DateTime.Now)
            {
                return Unauthorized();
            }

            var newAccessToken = _tokenService.GenerateAccessToken(principal.Claims);
            var newRefreshToken = _tokenService.GenerateRefreshToken();

            currentIdentityUser.RefreshToken = newRefreshToken;
            await _unitOfWork.Save();

            return Ok(new AuthenticateResponse()
            {
                AccessToken = newAccessToken,
                RefreshToken = newRefreshToken,
            });
        }
    }
}
