namespace StockAPI.Domain.Entities
{
    public class User
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public float? ShoeSize { get; set; }
        public string UserName { get; set; }
        public string EmailAddress { get; set; }
        public string Password { get; set; }
        public Guid? ActiveBuyingId { get; set; }
        public Guid? ActiveSellingId { get; set;}
    }
}
