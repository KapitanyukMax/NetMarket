using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class AddedCategoryImages : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "Categories",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 1,
                column: "ImageUrl",
                value: "https://media.product.which.co.uk/prod/images/original/883d194116a8-carsnew-and-used-carspreview.jpg");

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 2,
                column: "ImageUrl",
                value: "https://st3.idealista.com/cms/archivos/2019-02/media/image/pets%201%20pixabay.jpg?fv=ZKCvBRSk");

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 3,
                column: "ImageUrl",
                value: "https://www.thespruce.com/thmb/hFfTdifXm15gi7lJ9On8IeExlrg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/patio-furniture-plans-4769226-hero-2ba4479863d84c908bb86a06830f023d.jpg");

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 4,
                column: "ImageUrl",
                value: "https://en.idei.club/uploads/posts/2023-06/thumbs/1686248951_en-idei-club-p-electronic-devices-dizain-instagram-6.jpg");

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 5,
                column: "ImageUrl",
                value: "https://acousticwood.net/uploads/2023/07/what-does-fashion-over-style-mean.webp");

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 6,
                column: "ImageUrl",
                value: "https://www.inclusiveemployers.co.uk/wp-content/uploads/2022/04/pexels-monstera-5384620-1920x1280.jpg");

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 7,
                column: "ImageUrl",
                value: "https://assets.publishing.service.gov.uk/media/5ef5c197d3bf7f7691f44b6c/istock-894058154.jpg");

            migrationBuilder.UpdateData(
                table: "Categories",
                keyColumn: "Id",
                keyValue: 8,
                column: "ImageUrl",
                value: "https://cdn01.allaboutart.co.uk/media/klkjk1sk/artist-20accessories.png?anchor=center&mode=crop&width=1920&height=1280&rnd=132706501201730000&format=jpg&quality=55&bgcolor=white");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "Categories");
        }
    }
}
