namespace Core.Helpers
{
    public class JwtOptions
    {
        public string Issuer { get; set; } = string.Empty;

        public string Key { get; set; } = string.Empty;

        public int Lifetime { get; set; }
    }
}
