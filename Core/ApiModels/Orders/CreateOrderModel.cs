namespace Core.ApiModels.Orders
{
    public class CreateOrderModel
    {
        public DateTime Date { get; set; }

        public decimal TotalPrice { get; set; }

        public string UserId { get; set; } = string.Empty;

        public ICollection<int> ProductIds { get; set; } = null!;
    }
}
