using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

[Route("[controller]")]
public class AccountController : ControllerBase
{
    private readonly UserManager<IdentityUser> _userManager;
    private readonly IConfiguration _config;
    public AccountController(UserManager<IdentityUser> userManager, IConfiguration config)
    {
        _userManager = userManager;
        _config = config;
    }
    
    [HttpPost("register")]
    public async Task<IActionResult> Register(AccountRegistModel model)
    {
        // 1. Instantiate the user object
        var user = new IdentityUser 
        { 
            UserName = model.UserName, 
            Email = model.Email 
        };

        // 2. Call CreateAsync to save the user and hash the password
        var result = await _userManager.CreateAsync(user, model.Password);

        if (result.Succeeded)
        {
            // Optional: Assign a role to the new user
            // await _userManager.AddToRoleAsync(user, "User");
            Console.WriteLine("User created successfully.");
            return Ok("Account registered");
        }
        else
        {
            foreach (var error in result.Errors)
            {
                Console.WriteLine($"Error: {error.Description}");
            }
        }
        return BadRequest("Failed to register account");
    }

    [HttpPost("login")]
    public async Task<IActionResult> Login(AccountLoginModel model)
    {
        
        var user = await _userManager.FindByNameAsync(model.UserName);
        if (user != null)
        {
            var passwordValid = await _userManager.CheckPasswordAsync(user, model.Password);
            if (passwordValid)
            {
                var token = GenerateJwtToken(user);
                return Ok(new { token });
            }
            else
            {
                return Unauthorized("Invalid password");
            }
        }
        return BadRequest("User not found");
    }

    private string GenerateJwtToken(IdentityUser user)
    {
        var claims = new[]
        {
            new Claim(ClaimTypes.NameIdentifier, user.Id),
            new Claim(ClaimTypes.Email, user.Email)
        };

        var key = new SymmetricSecurityKey(
            Encoding.UTF8.GetBytes(_config["Jwt:Key"]));

        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var token = new JwtSecurityToken(
            claims: claims,
            expires: DateTime.Now.AddHours(2),
            signingCredentials: creds
        );

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}