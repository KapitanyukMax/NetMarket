using Core.ApiModels.Products;
using Core.Dtos;

namespace Core.Interfaces
{
    public interface IProductsService
    {
        List<ProductDto> Get();
        ProductDto? Get(int modelId);
        void Create(CreateProductModel model);
        void Edit(EditProductModel model);
        void Delete(int modelId);
    }
}
