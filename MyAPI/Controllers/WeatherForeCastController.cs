using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

[Route("[controller]")]
public class WeatherForecastController : ControllerBase
{
    private static readonly string[] Summaries = new[]
    {
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    };

    [Authorize]
    [HttpGet("authorized")]
    public async Task<IActionResult> Get()
    {
        return Ok(new { data = "Authorize endpoint" });
    }

    [HttpGet("public")]
    public async Task<IActionResult> Test([FromQuery] string studentId, [FromQuery] string email)
    {
        var query = "select * from Students where studentId = "+ studentId;
        return Ok(new { data = query });
    }
}