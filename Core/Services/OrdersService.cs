using AutoMapper;
using Core.ApiModels.Orders;
using Core.Dtos;
using Core.Entities;
using Core.Exceptions;
using Core.Interfaces;
using System.Net;

namespace Core.Services
{
    public class OrdersService : IOrdersService
    {
        private readonly IRepository<Order> _repository;
        private readonly IMapper _mapper;

        public OrdersService(IRepository<Order> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public List<OrderDto> GetByUserId(string userId)
        {
            var model = _repository.Get(filter: order => order.UserId == userId)
                        ?? throw new HttpException("Order with User Id not found!", HttpStatusCode.NotFound);

            return _mapper.Map<List<OrderDto>>(model);
        }

        public void Create(CreateOrderModel model)
        {
            _repository.Insert(_mapper.Map<Order>(model));
            _repository.Save();
        }

        public void Delete(int modelId)
        {
            var model = _repository.GetByID(modelId)
                        ?? throw new HttpException("Order with Id not found!", HttpStatusCode.NotFound);

            _repository.Delete(model);
            _repository.Save();
        }
    }
}
