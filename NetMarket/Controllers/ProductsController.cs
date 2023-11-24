using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Core.ApiModels.Products;
using Core.Interfaces;

namespace NetMarket.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductsController : ControllerBase
    {
        private readonly IProductsService _productsService;

        public ProductsController(IProductsService productsService)
        {
            _productsService = productsService;
        }

        [Authorize]
        [HttpGet("all")]
        public IActionResult Get()
        {
            return Ok(_productsService.Get());
        }

        [HttpGet("{id}")]
        public IActionResult GetByIdFromRoute([FromRoute] int modelId)
        {
            return Ok(_productsService.Get(modelId));
        }

        [HttpGet("category/{id}")]
        public IActionResult GetByCategoryId([FromRoute] int categoryId)
        {
            return Ok();
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

        [Authorize]
        [HttpDelete("{id}")]
        public IActionResult Delete([FromRoute] int modelId)
        {
            _productsService.Delete(modelId);
            return Ok();
        }
    }
}
