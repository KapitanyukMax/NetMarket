using Core.ApiModels.Accounts;
using Core.Dtos;

namespace Core.Interfaces
{
    public interface IAccountsService
    {
        Task RegisterAsync(RegisterRequest model);
        Task<LoginResponse> LoginAsync(LoginRequest model);
        Task LogoutAsync();
    }
}
