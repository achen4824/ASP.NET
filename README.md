# ASP.NET - ReactJS
Repository for ASP.NET tutorials and other assorted projects used for gaining experience in ASP.NET.

## Folders

### Tutorials

#### ASP.NET
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
    **Import Packages for Database**

    ```
    dotnet tool install --global dotnet-ef
    dotnet tool install --global dotnet-aspnet-codegenerator
    dotnet add package Microsoft.EntityFrameworkCore.SQLite
    dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
    dotnet add package Microsoft.EntityFrameworkCore.Design
    dotnet add package Microsoft.EntityFrameworkCore.SqlServer
    ```

    **Scaffold Movie Pages** - `dotnet aspnet-codegenerator controller -name MoviesController -m Movie -dc MvcMovieContext --relativeFolderPath Controllers --useDefaultLayout --referenceScriptLibraries`

    *Learning aspects*
    * */Views/Shared/_Layout.cshtml* contains outside layout/frame for navigation. Controlled by *Views/_ViewStart.cshtml* setting it to `null` means no layout file will be used.
    * *Startup.cs*  at the bottom near endpoints specifies the format for requests. By default it is set *"controller/action/id?"* Test this with the link `localhost:5001/HelloWorld/Welcome/4?name=Andrew`
    * As mentioned before in Controllers are the controllers for each route. They manage requests by either directing through `Views()` or returning themselves.
    * In the views cshtml options such as *asp-controller*, or *asp-action* can be added to a-links as requests instead of writing `src="controller/link"`
    * Learned Data Annotations, displayname/variablename.


    **[Future Reference MVC](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-mvc-app/adding-controller?view=aspnetcore-3.1&tabs=visual-studio)**

**Note:** MVC is different from Web API in that it generally returns View + Data and Web API just returns Data making Web API more lightweight.

* **[Web API](https://docs.microsoft.com/en-us/aspnet/core/tutorials/first-web-api?view=aspnetcore-3.1&tabs=visual-studio)** - Creating a web API. No more nice C# preprocessed view before returning. Web API only sends information where a frontend framework like ReactJS or Angular. Not to happy to be using javascript again.

    **Scaffold Controller for Web API**
    ```
    dotnet add package Microsoft.VisualStudio.Web.CodeGeneration.Design
    dotnet add package Microsoft.EntityFrameworkCore.Design
    dotnet tool install --global dotnet-aspnet-codegenerator
    dotnet aspnet-codegenerator controller -name TodoItemsController -async -api -m TodoItem -dc TodoContext -outDir Controllers
    ```

#### ReactJS

## TicTacToe Game

