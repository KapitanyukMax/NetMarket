using Core.Dtos;

namespace Core.Interfaces
{
    public interface ICategoriesService
    {
        List<CategoryDto> Get();
        CategoryDto? Get(int modelId);
    }
}
