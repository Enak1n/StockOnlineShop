namespace StockAPI.Domain.Entities
{
    public class Article
    {
        public Guid Id { get; set; }
        public Guid UserId { get; set; }
        public User User { get; set; }
        public string Title { get; set; }
        public string Information { get; set; }
        public string[] Photos { get; set; }
        public DateTimeOffset DateOfCreation { get; set; } = DateTimeOffset.Now;

    }
}
