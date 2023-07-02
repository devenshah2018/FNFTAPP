using System.ComponentModel.DataAnnotations;

namespace FNFTAPP.Models
{
    public class User_Information
    {
        [Key]
        public int UserId { get; set; }
        public string? Name { get; set; }
        public string? Email { get; set; }
        public string? WalletAddress { get; set; }
        public string? Password { get; set; }
    }
}
