﻿using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;

namespace Backend.Domain.Entities
{
    public class ApplicationUser : IdentityUser
    {
        public ICollection<Execution> Executions { get; set; }
    }
}
