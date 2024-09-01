# Use the official .NET image as a build stage
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build

# Set the working directory
WORKDIR /src

# Copy the project files for all the dependent projects and the main Api project
COPY ["Backend.Api/Backend.Api.csproj", "Backend.Api/"]
COPY ["Backend.Application/Backend.Application.csproj", "Backend.Application/"]
COPY ["Backend.Domain/Backend.Domain.csproj", "Backend.Domain/"]
COPY ["Backend.Storage/Backend.Storage.csproj", "Backend.Storage/"]

# Restore the dependencies for the Api project and its referenced projects
RUN dotnet restore "Backend.Api/Backend.Api.csproj"

# Copy the entire source code for all projects
COPY . .

# Build the project and its dependencies
WORKDIR /src/Backend.Api
RUN dotnet publish -c Release -o /app/publish

# Use the official .NET runtime image
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS runtime

# Set the working directory
WORKDIR /app

# Copy the compiled application from the build stage
COPY --from=build /app/publish .

# Expose the port your application will run on
EXPOSE 80

# Start the application
ENTRYPOINT ["dotnet", "Backend.Api.dll"]

