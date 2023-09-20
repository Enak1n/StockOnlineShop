using AuthAPI.Helpers;
using AuthAPI.Services;
using AuthAPI.Services.Interfaces;
using Microsoft.EntityFrameworkCore;
using StockAPI.Domain.DataBase;
using StockAPI.Domain.UnitOfWork;
using StockAPI.Domain.UnitOfWork.Interfaces;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
var databaseConnection = builder.Configuration.GetConnectionString("DefaultConnection");
builder.Services.AddDbContext<Context>(option => option.UseNpgsql(databaseConnection));
builder.Services.AddControllers();

builder.Services.AddTransient<IUnitOfWork, UnitOfWork>();
builder.Services.AddScoped<IAuthService, AuthService>();
builder.Services.AddScoped<IPasswordHasher, PasswordHasher>();
builder.Services.AddAutoMapper(typeof(MappingProfile));

// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(policy => policy.AddPolicy("default", opt =>
{
    opt.WithOrigins("localhost:3000", "https://localhost:3000", "http://localhost:3000");
    opt.AllowAnyHeader();
    opt.AllowAnyMethod();
    opt.AllowCredentials();
}));


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.UseCors("default");
app.MapControllers();

app.Run();
