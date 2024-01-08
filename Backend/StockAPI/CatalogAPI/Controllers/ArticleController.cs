using Microsoft.AspNetCore.Mvc;
using StockAPI.Domain.UnitOfWork.Interfaces;

namespace CatalogAPI.Controllers
{
    [Route("[controller]/[action]")]
    [ApiController]
    public class ArticleController : ControllerBase
    {
        private readonly IUnitOfWork _unitOfWork;

        public ArticleController(IUnitOfWork unitOfWork)
        {
            _unitOfWork = unitOfWork;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var res = await _unitOfWork.Articles.GetAll();
            return Ok(res);
        }
    }
}
