namespace Core.Dtos
{
    public class ProductDto
    {
        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public decimal Price { get; set; }

        public double Discount { get; set; }

        public int Rating { get; set; }

        public string? Description { get; set; }

        public string? ImageUrl { get; set; }

        public string StatusName { get; set; } = string.Empty;

        public int CategoryId { get; set; }

        public string CategoryName { get; set; } = string.Empty;
    }
}
