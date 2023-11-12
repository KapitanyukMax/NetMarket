namespace Core.Entities
{
    public class Order
    {
        public int Id { get; set; }

        public DateTime Date { get; set; }

        public decimal TotalPrice { get; set; }

        public string UserId { get; set; } = string.Empty;

        public User User { get; set; } = default!;

        public ICollection<Product> Products { get; set; } = null!;
    }
}
