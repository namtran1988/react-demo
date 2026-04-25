using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[Route("api/[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    [Authorize]
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        return Ok("test");
    }

    [HttpGet("public")]
    public async Task<IActionResult> Test()
    {
        return Ok("public endpoint");
    }
}