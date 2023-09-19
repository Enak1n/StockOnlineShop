namespace StockAPI.Domain.Entities
{
    public class Item
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string Name { get; set; }
        public string PhotoPath { get; set; }
        public string? Description { get; set; }
        public double Price { get; set; }
        public double LastPrice { get; set; }
        public Guid OwnerId { get; set; }
    }
}
