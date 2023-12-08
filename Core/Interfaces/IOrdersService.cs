using Core.ApiModels.Orders;
using Core.Dtos;

namespace Core.Interfaces
{
    public interface IOrdersService
    {
        List<OrderDto> GetByUserId(string userId);
        void Create(CreateOrderModel model);
        void Delete(int modelId);
    }
}
