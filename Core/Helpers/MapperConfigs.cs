using AutoMapper;
using Core.ApiModels.Orders;
using Core.ApiModels.Products;
using Core.Dtos;
using Core.Entities;
using Core.Interfaces;

namespace Core.Helpers
{
    public class MapperConfigs : Profile
    {
        public MapperConfigs(IRepository<Product> productsRepository)
        {
            CreateMap<CreateProductModel, Product>();
            CreateMap<EditProductModel, Product>();
            CreateMap<Product, ProductDto>().ForMember(p => p.StatusName, config =>
                config.MapFrom(p => Enum.GetName(p.Status))).ReverseMap();

            CreateMap<Category, CategoryDto>().ReverseMap();

            CreateMap<CreateOrderModel, Order>().ForMember(o => o.Products, config =>
                config.MapFrom(o => o.ProductIds.Select(id =>
                productsRepository.Get(p => p.Id == id, null, string.Empty))));
            CreateMap<Order, OrderDto>().ReverseMap();;
        }
    }
}
