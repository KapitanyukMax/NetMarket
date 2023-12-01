

namespace Core.Entities
{
    public class Product
    {
        public enum Statuses { InStock, Unavailable, Limited }

        public int Id { get; set; }

        public string Name { get; set; } = string.Empty;

        public decimal Price { get; set; }

        public decimal Discount { get; set; }

        public int Rating { get; set; }

        public string? Description { get; set; }

        public string? ImageUrl { get; set; }

        public Statuses Status { get; set; }

        public int CategoryId { get; set; }

        public Category Category { get; set; } = default!;

        public ICollection<Order> Orders { get; set; } = null!;
    }
}
