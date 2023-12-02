using System.Net;
using Microsoft.AspNetCore.Identity;
using Core.ApiModels.Accounts;
using Core.Entities;
using Core.Exceptions;
using Core.Interfaces;
using Core.Dtos;

namespace BusinessLogic.Services
{
    public class AccountsService : IAccountsService
    {
        private readonly SignInManager<User> _signInManager;
        private readonly UserManager<User> _userManager;
        private readonly IJwtService _jwtService;

        public AccountsService(IJwtService jwtService, SignInManager<User> signInManager, UserManager<User> userManager)
        {
            _signInManager = signInManager;
            _userManager = userManager;
            _jwtService = jwtService;
        }

        public async Task<LoginResponse> LoginAsync(LoginRequest model)
        {
            var user = await _userManager.FindByNameAsync(model.Email);

            if (user == null || !await _userManager.CheckPasswordAsync(user, model.Password))
                throw new HttpException("Invalid login or password!", HttpStatusCode.BadRequest);

            await _signInManager.SignInAsync(user, true);

            return new()
            {
                Token = _jwtService.CreateToken(_jwtService.GetClaims(user))
            };
        }

        public async Task LogoutAsync()
        {
            await _signInManager.SignOutAsync();
        }

        public async Task RegisterAsync(RegisterRequest model)
        {
            var user = new User()
            {
                UserName = model.Email,
                Email = model.Email,
                PhoneNumber = model.PhoneNumber,
                Birthdate = DateTime.Parse(model.Birthdate)
            };

            var result = await _userManager.CreateAsync(user, model.Password);

            if (!result.Succeeded)
            {
                var message = string.Join(", ", result.Errors.Select(x => x.Description));

                throw new HttpException(message, HttpStatusCode.BadRequest);
            }
        }
    }
}
