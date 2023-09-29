using Microsoft.AspNetCore.Mvc;
using StockAPI.Domain.DataBase;
using StockAPI.Domain.UnitOfWork.Interfaces;

namespace CatalogAPI.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class ItemController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public ItemController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var res = await _unitOfWork.Items.GetAll();
            return Ok(res);
        }

        [HttpGet]
        public async Task<IActionResult> GetTrendingSneakers()
        {
            var trendingSneakers = await _unitOfWork.Items
                .GetAll();

            trendingSneakers = trendingSneakers.OrderByDescending(x => x.Sold).ToList();

            var top6TrendingSneakers = trendingSneakers.Take(6);

            var random = new Random();
            var shuffledTrendingSneakers = top6TrendingSneakers.OrderBy(x => random.Next()).ToList();

            return Ok(shuffledTrendingSneakers);
        }

    }
}
