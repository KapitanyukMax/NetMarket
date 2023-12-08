using Core.ApiModels.Orders;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace NetMarket.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrdersController : ControllerBase
    {
        private readonly IOrdersService _ordersService;

        public OrdersController(IOrdersService ordersService)
        {
            _ordersService = ordersService;
        }

        [HttpGet("{userId}")]
        public IActionResult GetByUserId([FromRoute] string userId)
        {
            return Ok(_ordersService.GetByUserId(userId));
        }

        [HttpPost]
        public IActionResult Create([FromBody] CreateOrderModel model)
        {   
            if (!ModelState.IsValid)
                return BadRequest();

            _ordersService.Create(model);
            return Ok();
        }

        [HttpDelete("{modelId}")]
        public IActionResult Delete([FromRoute] int modelId)
        {
            _ordersService.Delete(modelId);
            return Ok();
        }
    }
}
