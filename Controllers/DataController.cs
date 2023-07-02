using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.Sqlite;
using FNFTAPP.Models;
using FNFTAPP.Data;

namespace FNFTAPP.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        private readonly DatabaseContext _dbContext;

        public DataController(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpPost("addUser")]
        public IActionResult AddUser(User_Information user_Information)
        {
            _dbContext.User_Accounts.Add(user_Information);
            _dbContext.SaveChanges();
            return Ok();

            /*using (var connection = new SqliteConnection($"Data Source={DatabasePath}"))
            {
                connection.Open();
                var command = connection.CreateCommand();
                command.CommandText = "INSERT INTO User_Accounts (name, email, wallet_address, password) VALUES (@value1, @value2, @value3, @value4)";
                command.Parameters.AddWithValue("@value1", user_Information.Name);
                command.Parameters.AddWithValue("@value2", user_Information.Email);
                command.Parameters.AddWithValue("@value3", user_Information.WalletAddress);
                command.Parameters.AddWithValue("@value4", user_Information.Password);

                command.ExecuteNonQuery();

                return Ok();
            }*/
        }
    }
}
