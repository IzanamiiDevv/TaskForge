using Microsoft.AspNetCore.Mvc;

namespace Todo_App.Controllers;

[ApiController]
[Route("/API")]
public class APIController : ControllerBase
{
    [HttpGet("getHistory")]
    public IActionResult GetHistory()
    {
        return Ok(new {
            History = "Okay",
        });
    }
}
