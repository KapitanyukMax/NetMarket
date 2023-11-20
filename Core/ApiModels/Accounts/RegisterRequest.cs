﻿namespace Core.ApiModels.Accounts
{
    public class RegisterRequest
    {
        public string Email { get; set; } = string.Empty;

        public string Password { get; set; } = string.Empty;

        public string? PhoneNumber { get; set; }

        public DateTime Birthdate { get; set; }
    }
}
