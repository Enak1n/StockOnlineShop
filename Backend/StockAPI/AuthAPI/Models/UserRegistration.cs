using System.ComponentModel.DataAnnotations;

namespace AuthAPI.Models
{
    public class UserRegistration
    {
        [Required(ErrorMessage = "First Name can't be empty")]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Last Name can't be empty")]
        public string LastName { get; set; }

        [Required(ErrorMessage = "Email can't be empty")]
        [EmailAddress]
        public string Email { get; set; }

        [RegularExpression("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,15}$", ErrorMessage = "At least 8 characters, 1 uppercase letter, 1 number and 1 symbol")]
        [Required]
        public string Password { get; set; } 
    }
}
