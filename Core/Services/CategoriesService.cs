using AutoMapper;
using Core.Dtos;
using Core.Entities;
using Core.Exceptions;
using Core.Interfaces;
using System.Net;

namespace Core.Services
{
    public class CategoriesService : ICategoriesService
    {
        private readonly IRepository<Category> _repository;
        private readonly IMapper _mapper;

        public CategoriesService(IRepository<Category> repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }

        public List<CategoryDto> Get()
        {
            var models = _repository.Get();
            return _mapper.Map<List<CategoryDto>>(models);
        }

        public CategoryDto? Get(int modelId)
        {
            var model = _repository.GetByID(modelId)
                        ?? throw new HttpException("Category with Id not found!", HttpStatusCode.NotFound);

            return _mapper.Map<CategoryDto>(model);
        }
    }
}
