using System.ComponentModel.DataAnnotations;

namespace StockAPI.Domain.Entities
{
    public class User
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public float? ShoeSize { get; set; }
        public string EmailAddress { get; set; }
        public string Password { get; set; }
        public Guid[]? ActiveBuyingId { get; set; }
        public Guid[]? ActiveSellingId { get; set;}
        public string RefreshToken { get; set; }
        public DateTime RefreshTokenExpiryTime { get; set; }
    }
}
