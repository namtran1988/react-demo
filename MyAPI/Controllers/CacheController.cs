using Microsoft.AspNetCore.Mvc;

[Route("[controller]")]
public class CacheController: ControllerBase
{
    public CacheController(){

    }

    [Route("BrowserCache")]
    [ResponseCache(Duration = 5)]//Duration in cache seconds
    public IActionResult ResponseCache()
    {
        return Ok(new {CurrentTime = DateTime.Now.ToString("dd/MM/yyyy hh:mm:ss")});
    }
}