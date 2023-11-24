using Core.Entities;

namespace Core.ApiModels.Products
{
    public class CreateProductModel
    {
        public string Name { get; set; } = string.Empty;

        public decimal Price { get; set; }

        public decimal Discount { get; set; }

        public int Rating { get; set; }

        public string? Description { get; set; }

        public string? ImageUrl { get; set; }

        public Product.Statuses Status { get; set; }

        public int CategoryId { get; set; }
    }
}
