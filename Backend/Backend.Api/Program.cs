using Backend.Storage.DependencyInjection;
using Backend.Domain.Entities;
using Backend.Storage.Data;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Backend.Application.Service.Interfaces;
using Backend.Application.Service.Implementation;
using Microsoft.AspNetCore.Identity;
using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers()
    .AddNewtonsoftJson();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSwaggerGen(option =>
{
    option.SwaggerDoc("v1", new OpenApiInfo { Title = "Demo API", Version = "v1" });
    option.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        In = ParameterLocation.Header,
        Description = "Please enter a valid token",
        Name = "Authorization",
        Type = SecuritySchemeType.Http,
        BearerFormat = "JWT",
        Scheme = "Bearer"
    });
    option.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Type=ReferenceType.SecurityScheme,
                    Id="Bearer"
                }
            },
            new string[]{}
        }
    });
});

builder.Services.AddAuthorization();


var dbConn = builder.Configuration["DatabaseConnectionString"];
builder.Services.StorageServices(dbConn);


builder.Services.AddIdentity<ApplicationUser, IdentityRole>(options =>{

    options.Password.RequireDigit = true;
    options.Password.RequireNonAlphanumeric = true;
    options.Password.RequireUppercase = true;
    options.Password.RequiredLength = 6;

    options.Lockout.DefaultLockoutTimeSpan = TimeSpan.FromMinutes(5);
    options.Lockout.MaxFailedAccessAttempts = 5;
    options.Lockout.AllowedForNewUsers = true;

    options.User.RequireUniqueEmail = true;

}).AddEntityFrameworkStores<AppDbContext>();

builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme =
    options.DefaultChallengeScheme =
    options.DefaultForbidScheme =
    options.DefaultScheme =
    options.DefaultSignInScheme =
    options.DefaultSignOutScheme = JwtBearerDefaults.AuthenticationScheme;
}).AddJwtBearer(options =>
{
    options.TokenValidationParameters = new Microsoft.IdentityModel.Tokens.TokenValidationParameters
    {
        ValidateIssuer = true,
        ValidIssuer = builder.Configuration["JWT:Issuer"],
        ValidateAudience = true,
        ValidAudience = builder.Configuration["JWT:Audience"],
        ValidateIssuerSigningKey = true,
        IssuerSigningKey = new SymmetricSecurityKey(
            System.Text.Encoding.UTF8.GetBytes(builder.Configuration["JWT:SigninKey"]))
    };
});

builder.Services.AddScoped<ITokenService, TokenService>();

var app = builder.Build();

using (var scope = app.Services.CreateScope())
{
    var dbContext = scope.ServiceProvider.GetRequiredService<AppDbContext>();
    SeedData(dbContext);
}


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();

void SeedData(AppDbContext context)
{
    if (!context.AgptBlocks.Any())
    {
        context.AgptBlocks.AddRange(
            new AgptBlock { Id = "d2e2ecd2-9ae6-422d-8dfe-ceca500ce6a6", Name = "AutoGPTAgentBlock" },
            new AgptBlock { Id = "1ff065e9-88e8-4358-9d82-8dc91f622ba9", Name = "ValueBlock" },
            new AgptBlock { Id = "f3b1c1b2-4c4f-4f0d-8d2f-4c4f0d8d2f4c", Name = "PrintingBlock" },
            new AgptBlock { Id = "31d1064e-7446-4693-a7d4-65e5ca1180d1", Name = "DictionaryAddEntryBlock" },
            new AgptBlock { Id = "aeb08fc1-2fc1-4141-bc8e-f758f183a822", Name = "ListAddEntryBlock" },
            new AgptBlock { Id = "715696a0-e1da-45c8-b209-c2fa9c3b0be6", Name = "ConditionBlock" },
            new AgptBlock { Id = "acf7625e-d2cb-4941-bfeb-2819fc6fc015", Name = "ReadCsvBlock" },
            new AgptBlock { Id = "d3f4g5h6-1i2j-3k4l-5m6n-7o8p9q0r1s2t", Name = "DiscordReaderBlock" },
            new AgptBlock { Id = "h1i2j3k4-5l6m-7n8o-9p0q-r1s2t3u4v5w6", Name = "DiscordMessageSenderBlock" },
            new AgptBlock { Id = "a1234567-89ab-cdef-0123-456789abcdef", Name = "SendEmailBlock" },
            new AgptBlock { Id = "6595ae1f-b924-42cb-9a41-551a0611c4b4", Name = "HttpRequestBlock" },
            new AgptBlock { Id = "f8e7d6c5-b4a3-2c1d-0e9f-8g7h6i5j4k3l", Name = "ForEachBlock" },
            new AgptBlock { Id = "ed55ac19-356e-4243-a6cb-bc599e9b716f", Name = "ObjectLlmCallBlock" },
            new AgptBlock { Id = "1f292d4a-41a4-4977-9684-7c8d560b9f91", Name = "TextLlmCallBlock" },
            new AgptBlock { Id = "c3d4e5f6-7g8h-9i0j-1k2l-m3n4o5p6q7r8", Name = "TextSummarizerBlock" },
            new AgptBlock { Id = "c3d4e5f6-g7h8-i9j0-k1l2-m3n4o5p6q7r8", Name = "AdvancedLlmCallBlock" },
            new AgptBlock { Id = "b1ab9b19-67a6-406d-abf5-2dba76d00c79", Name = "MathsBlock" },
            new AgptBlock { Id = "3c9c2f42-b0c3-435f-ba35-05f7a25c772a", Name = "CounterBlock" },
            new AgptBlock { Id = "3f7b2dcb-4a78-4e3f-b0f1-88132e1b89df", Name = "CreateMediumPostBlock" },
            new AgptBlock { Id = "c6731acb-4285-4ee1-bc9b-03d0766c370f", Name = "RedditGetPostsBlock" },
            new AgptBlock { Id = "4a92261b-701e-4ffb-8970-675fd28e261f", Name = "RedditPostCommentBlock" },
            new AgptBlock { Id = "c6731acb-4105-4zp1-bc9b-03d0036h370g", Name = "RSSReaderBlock" },
            new AgptBlock { Id = "h5e7f8g9-1b2c-3d4e-5f6g-7h8i9j0k1l2m", Name = "WikipediaSummaryBlock" },
            new AgptBlock { Id = "b2c3d4e5-6f7g-8h9i-0j1k-l2m3n4o5p6q7", Name = "WebSearchBlock" },
            new AgptBlock { Id = "a1b2c3d4-5e6f-7g8h-9i0j-k1l2m3n4o5p6", Name = "WebScraperBlock" },
            new AgptBlock { Id = "f7a8b2c3-6d4e-5f8b-9e7f-6d4e5f8b9e7f", Name = "GetOpenWeatherMapBlock" },
            new AgptBlock { Id = "3060088f-6ed9-4928-9ba7-9c92823a7ccd", Name = "TextMatcherBlock" },
            new AgptBlock { Id = "3146e4fe-2cdd-4f29-bd12-0c9d5bb4deb0", Name = "TextParserBlock" },
            new AgptBlock { Id = "db7d8f02-2f44-4c55-ab7a-eae0941f0c30", Name = "TextFormatterBlock" },
            new AgptBlock { Id = "e30a4d42-7b7d-4e6a-b36e-1f9b8e3b7d85", Name = "TextCombinerBlock" },
            new AgptBlock { Id = "a892b8d9-3e4e-4e9c-9c1e-75f8efcf1bfa", Name = "CurrentTimeBlock" },
            new AgptBlock { Id = "b29c1b50-5d0e-4d9f-8f9d-1b0e6fcbf0b1", Name = "CurrentDateBlock" },
            new AgptBlock { Id = "b29c1b50-5d0e-4d9f-8f9d-1b0e6fcbf0h2", Name = "CurrentDateAndTimeBlock" },
            new AgptBlock { Id = "d67a9c52-5e4e-11e2-bcfd-0800200c9a71", Name = "TimerBlock" },
            new AgptBlock { Id = "f3a8f7e1-4b1d-4e5f-9f2a-7c3d5a2e6b4c", Name = "YouTubeTranscriberBlock" },
            new AgptBlock { Id = "b2g2c3d4-5e6f-7g8h-9i0j-k1l2m3n4o5p6", Name = "ObjectLookupBlock" },
            new AgptBlock { Id = "c0a8e994-ebf1-4a9c-a4d8-89d09c86741b", Name = "InputBlock" },
            new AgptBlock { Id = "363ae599-353e-4804-937e-b2ee3cef3da4", Name = "OutputBlock" }
        );
        context.SaveChanges();
    }
}
