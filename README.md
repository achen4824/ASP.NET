# ASP.NET
Repository for ASP.NET tutorials and other assorted projects used for gaining experience in ASP.NET.

## Folders

### Tutorials
* **[Hello World](https://dotnet.microsoft.com/learn/aspnet/hello-world-tutorial/install)** - The most traditional tutorial learning how to produce "Hello World" using ASP.NET SDK. As well as getting the environment setup.
    *Learning aspects*
    * Environment Setup
    * Creating new project
    * dotnet command flags
    * Running of project
* **[Razor Pages](https://docs.microsoft.com/en-us/aspnet/core/tutorials/razor-pages/razor-pages-start?view=aspnetcore-3.1&tabs=visual-studio-code)** - Razor Pages web app that manages a database of movies.
    *Learning aspects*
    * Create a Razor Pages web app
    * Run the app
    * Identify Project Files
* **[MVC Movies](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app/?view=aspnetcore-3.1)** - A standard MVC model web app unlike the Razor Pages Template. A very useful tutorial. 
    **Start Project** - `dotnet new mvc -o MvcMovie`
    **Open in Visual Studio Code** - `code -r MvcMovie`
    *Learning aspects*
    * */Views/Shared/_Layout.cshtml* contains outside layout/frame for navigation. Controlled by *Views/_ViewStart.cshtml* setting it to `null` means no layout file will be used.
    * *Startup.cs*  at the bottom near endpoints specifies the format for requests. By default it is set *"controller/action/id?"* Test this with the link `localhost:5001/HelloWorld/Welcome/4?name=Andrew`
    * As mentioned before in Controllers are the controllers for each route. They manage requests by either directing through `Views()` or returning themselves.
    * In the views cshtml options such as *asp-controller*, or *asp-action* can be added to a-links as requests instead of writing `src="controller/link"`

**[Future Reference MVC](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app/adding-controller?view=aspnetcore-3.1&tabs=visual-studio)**

* **[Web API](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-3.1&tabs=visual-studio)** - Creating a web API 
