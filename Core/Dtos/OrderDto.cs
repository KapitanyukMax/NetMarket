using Core.Entities;

namespace Core.Dtos
{
    public class OrderDto
    {
        public int Id { get; set; }

        public DateTime Date { get; set; }

        public decimal TotalPrice { get; set; }

        public string UserId { get; set; } = string.Empty;

        public ICollection<Product> Products { get; set; } = null!;
    }
}
