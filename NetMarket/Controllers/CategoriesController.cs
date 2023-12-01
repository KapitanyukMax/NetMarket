using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace NetMarket.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly ICategoriesService _categoriesService;

        public CategoriesController(ICategoriesService categoriesService)
        {
            _categoriesService = categoriesService;
        }

        [HttpGet("all")]
        public IActionResult Get()
        {
            return Ok(_categoriesService.Get());
        }

        [HttpGet("{modelId}")]
        public IActionResult GetByIdFromRoute([FromRoute] int modelId)
        {
            return Ok(_categoriesService.Get(modelId));
        }
    }
}
