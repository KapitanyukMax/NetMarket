using Microsoft.AspNetCore.Mvc;
using Core.ApiModels.Products;
using Core.Interfaces;

namespace NetMarket.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProductsController : ControllerBase
    {
        private readonly IProductsService _productsService;

        public ProductsController(IProductsService productsService)
        {
            _productsService = productsService;
        }

        [HttpGet("all")]
        public IActionResult Get()
        {
            return Ok(_productsService.Get());
        }

        [HttpGet("{modelId}")]
        public IActionResult GetByIdFromRoute([FromRoute] int modelId)
        {
            return Ok(_productsService.Get(modelId));
        }

        [HttpGet("category/{categoryId}")]
        public IActionResult GetByCategoryId([FromRoute] int categoryId)
        {
            return Ok(_productsService.GetByCategoryId(categoryId));
        }

        [HttpPost]
        public IActionResult Create([FromBody] CreateProductModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            _productsService.Create(model);
            return Ok();
        }

        [HttpPut]
        public IActionResult Edit([FromBody] EditProductModel model)
        {
            if (!ModelState.IsValid)
                return BadRequest();

            _productsService.Edit(model);
            return Ok();
        }

        [HttpDelete("{modelId}")]
        public IActionResult Delete([FromRoute] int modelId)
        {
            _productsService.Delete(modelId);
            return Ok();
        }
    }
}
