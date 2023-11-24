using AutoMapper;
using Core.ApiModels.Products;
using Core.Dtos;
using Core.Entities;

namespace Core.Helpers
{
    public class MapperConfigs : Profile
    {
        public MapperConfigs()
        {
            CreateMap<CreateProductModel, Product>();
            CreateMap<EditProductModel, Product>();
            CreateMap<Product, ProductDto>().ForMember(x => x.StatusName, config =>
            {
                config.MapFrom(p => Enum.GetName(p.Status));
            }).ReverseMap();

            CreateMap<Category, CategoryDto>().ReverseMap();
        }
    }
}
