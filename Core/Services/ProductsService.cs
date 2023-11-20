using AutoMapper;
using Core.ApiModels.Products;
using Core.Dtos;
using Core.Entities;
using Core.Interfaces;
using System.Net;
using Core.Exceptions;

namespace Core.Services
{
    public class ProductsService : IProductsService
    {
        private readonly IRepository<Product> _repository;
        private readonly IMapper _mapper;

        public ProductsService(IRepository<Product> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public void Create(CreateProductModel model)
        {
            _repository.Insert(_mapper.Map<Product>(model));
            _repository.Save();
        }
        
        public void Delete(int modelId)
        {
            var model = _repository.GetByID(modelId)
                        ?? throw new HttpException("Product with Id not found!", HttpStatusCode.NotFound);

            _repository.Delete(model);
            _repository.Save();
        }

        public void Edit(EditProductModel model)
        {
            _repository.Update(_mapper.Map<Product>(model));
            _repository.Save();
        }

        public List<ProductDto> Get()
        {
            var models = _repository.Get(includeProperties: "Category");
            return _mapper.Map<List<ProductDto>>(models);
        }

        public ProductDto? Get(int modelId)
        {
            var model = _repository.GetByID(modelId)
                        ?? throw new HttpException("Product with Id not found!", HttpStatusCode.NotFound);

            return _mapper.Map<ProductDto>(model);
        }
    }
}
