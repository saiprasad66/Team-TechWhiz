﻿using BusinessLogic;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Data.SqlClient;
using Models;

namespace Services.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PhysicianAvailabilityStatusController : ControllerBase
    {
        IPhysicianAvailabilityStatus _logic;
        public PhysicianAvailabilityStatusController(IPhysicianAvailabilityStatus logic)
        {
            _logic = logic;
        }
        [HttpPost("AddAvailability")]
        public IActionResult AddAvailability([FromBody] PhysicianAvailabilityStatus physicianAvailabilityStatus)
        {
            try
            {
                var avail=_logic.AddAvailability(physicianAvailabilityStatus);
                return Ok(avail);
            }
            catch (SqlException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut("UpdateAvailability")]
        public IActionResult UpdateAvailability([FromBody] PhysicianAvailabilityStatus physician)
        {
            try
            {
                var updated = _logic.UpdateAvailability(physician);
                return Ok(physician);
            }
            catch (SqlException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpGet("GetStatus")]
        public IActionResult GetAvailability([FromHeader]Guid id)
        {
            try
            {
                var status = _logic.GetAvailabilityStatus(id);
                return Ok(status);
            }
            catch (SqlException ex)
            {
                return BadRequest(ex.Message);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
