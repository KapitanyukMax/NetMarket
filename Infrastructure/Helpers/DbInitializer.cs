using Microsoft.EntityFrameworkCore;
using Core.Entities;

namespace Infrastructure.Helpers
{
    public static class DbInitializer
    {
        public static void SeedCategories(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Category>().HasData(new List<Category>
            {
                new() { Id = 1, Name = "Cars & Transport" },
                new() { Id = 2, Name = "Pets" },
                new() { Id = 3, Name = "Home & Garden" },
                new() { Id = 4, Name = "Electronics" },
                new() { Id = 5, Name = "Fashion" },
                new() { Id = 6, Name = "Hobbies & Sport" },
                new() { Id = 7, Name = "Musical Instruments" },
                new() { Id = 8, Name = "Art" }
            });
        }

        public static void SeedProducts(this ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Product>().HasData(new List<Product>
            {
                new()
                {
                    Id = 1,
                    Name = "iPhone 13 256GB",
                    Price = 25610.2m,
                    Discount = 33.3m,
                    Rating = 6,
                    Description = "Excellent condition as new\nPassed the test for 30 points for workability\nThere is a warranty for the device from the store up to 2 years",
                    ImageUrl = "https://www.reliancedigital.in/medias/Apple-MLPF3HN-A-Smart-Phone-491997699-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyNTU5NTZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDU5L2hlOC85ODc4MDkwMDg4NDc4LmpwZ3wxNGQzODYyZWJiYjYwZDVjZjNhM2Q5YzQ4ZmE5OTljMmZiYmM2MDE0ZjE1YzhhMTRmYjM2ZDkzZGEyODcxNTU2",
                    Status = Product.Statuses.InStock,
                    CategoryId = 4
                },
                new()
                {
                    Id = 2,
                    Name = "2020 Volvo S60",
                    Price = 473027.7m,
                    Discount = 0.0m,
                    Rating = 8,
                    ImageUrl = "https://ireland.apollo.olxcdn.com/v1/files/dddvh1ibzptb-UA/image",
                    Status = Product.Statuses.Limited,
                    CategoryId = 1
                },
                new()
                {
                    Id = 3,
                    Name = "Synthesizer Yamaha PSR E-343",
                    Price = 7900.0m,
                    Discount = 0.0m,
                    Rating = 6,
                    Description = "Great synthesizer professional line YAMAHA PSR E-343!\nPerfect condition!\nBoth adults and children can easily master the user-friendly control interface. This is a tool in which the design is organically combined with the necessary functionality",
                    ImageUrl = "https://ireland.apollo.olxcdn.com/v1/files/utm4vzs67i893-UA/image",
                    Status = Product.Statuses.InStock,
                    CategoryId = 7
                },
                new()
                {
                    Id = 4,
                    Name = "Printer HP DeskJet 2300",
                    Price = 2000.0m,
                    Discount = 10.0m,
                    Rating = 5,
                    Description = "A great printer that is suitable for both office and home use.\nThe printer allows you to print color photos and black and white text, as well as scan images. It has energy-saving functions, in particular sleep mode and auto-off mode",
                    ImageUrl = "https://ireland.apollo.olxcdn.com/v1/files/66wfny594cwu3-UA/image",
                    Status = Product.Statuses.Unavailable,
                    CategoryId = 4
                },
                new()
                {
                    Id = 5,
                    Name = "Sofa",
                    Price = 10830.0m,
                    Discount = 0.0m,
                    Rating = 7,
                    ImageUrl = "https://ireland.apollo.olxcdn.com/v1/files/w80mjaevar2s-UA/image",
                    Status = Product.Statuses.InStock,
                    CategoryId = 3
                }
            });
        }
    }
}
