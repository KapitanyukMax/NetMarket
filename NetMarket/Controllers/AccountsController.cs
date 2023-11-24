using Core.ApiModels.Accounts;
using Core.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace NetMarket.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly IAccountsService _accountsService;

        public AccountsController(IAccountsService accountsService)
        {
            _accountsService = accountsService;
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login(LoginRequest model)
        {
            var response = await _accountsService.LoginAsync(model);
            return Ok(response);
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register(RegisterRequest model)
        {
            await _accountsService.RegisterAsync(model);
            return Ok();
        }

        [HttpPost("logout")]
        public async Task<IActionResult> Logout()
        {
            await _accountsService.LogoutAsync();
            return Ok();
        }
    }
}
