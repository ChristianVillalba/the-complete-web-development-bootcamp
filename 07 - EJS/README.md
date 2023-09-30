# EJS: Embedded Javascript

Notes and projects based on: EJS module         
[The Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)          
Instructor: Dr. Angela Yu 

## Description: 

* Exercises in this module:
    * **Introduction EJS**
        * Generates a dynamic H1 Element
        * It gives an advice depending of the day of the week
    * **EJS - Tags**
        * Uses diferent EJS Tags to display different type of data
        * Retrives the current time
            * Depending if the the seconds is a pair or odd number:
                * Displays a list of fruits
                * Displays a paragraph
    * **EJS - Passing Data**
        * Users introduce their name (or any name)
        * App counts and displays the number of letters of the name.  

## Starting EJS & Dependencies
* Initialize NPM 
    * `npm init -y`
* Install express & ejs
    * `npm i express ejs`
* Edit package.json:
    * `"type": "module",`

## Notes

###  EJS: Embedded Javascript

* EJS (Embedded JavaScript Templating) is a **template engine** for Node-JS. 
    * It lets us embed JS code in a template language (EJS)
    * That code is then used to generate HTML
* EJS Templating:
    * A template engine is software designed to 
        * Combine templates with a data model 
        * Produce, in our case, real HTML code:
        * `<H1>Hello, <%= name %>! <H1>`
    * It handles the task of interpolating **data** into **HTML code** with minimal code while providing some features
    * The separation of concerns
    * It ends with the `.ejs` file extension.

* ***Note: It requires Express, and ejs***
    * `$ npm install ejs`

* ***Note: It might require EJS Language Support for our text editor***
    * [EJS language support](https://marketplace.visualstudio.com/items?itemName=DigitalBrainstem.javascript-ejs-support)
<br />

* Difference Static Files & Dynamic Files
* **Static files:** 
    * Don't change
    * ```javascript
        app.get("/", (req, res) => {
            res.sendFile(__dirname + "/public/index.html");
        });
        ```
* **Dynamic files:**
    * A template does change because we're having to insert things into it.
    * In index.js
    * ```javascript
        app.get("/", (req, res) => {
            res.render("index.ejs"), // specifies file
            { name: req.body["name"] } // adds js Object with properties
        });
        ```
    * In index.ejs
    * ```javascript
        <body>
            <h1>
                Hello <%= name %> // We can send the value of the key: name 
            <h1/>
        <body>
        ```

###  EJS Tags

* `<%=  %>`
    * Output JS Variables
    * Interpret as JS Variables
    * There will be an output that's going to be put into that HTML or JS file.
* `<%  %>`
    * Execute JS Code
    * This does not give an output
    * The code in here will be evaluated,     
    but there will be nothing that shows up when it gets converted to HTML
* `<%-  %>`
    * Renders HTML  
* `<%- include("file.ejs") %>`
    * Inserts another EJS File
* `<%#  %>`
    * EJS Comments
* `<%%  %%>`
    * Escape characters to write `<%`  & `%>` in EJS

###  Passing Data

* **Passing Data:** From **server** to **client** side  (EJS)
    * `res.render()` method
        * Firstly the name of the JS file
        * Then, any sort of data that we want to render.
            * The data is a **key-value** pair (name-data)
        * ```javascript
            app.get("/", (req, res) => {
                res.render("index.ejs", 
                    { name: "Christian";}
                ); 
            });
        ```
    * EJS File: passing data    
        * ```javascript
            <h1>
                Hello, <%= name %>
            </h1>
            ```
* **No Data in the Server to EJS File:** 
    * `locals` variable
        * A way to access all of the variables that get sent over with `res.render`
    * No Data in the Server can happen quite frequently. This may crash our app.  (the .js file does not store data)

    * Creating `locals` variable in our JS file
        * `locals` variable always exists so We can use it to check for the existence of variables passed over to EJS.
        * we can set manually `res.locals = {name: data}`
            
        * ```javascript
            app.get("/", (req, res) => {
                res.render("index.ejs",
                <!-- MISSING DATA || res.locals = {name: data} --> 
                <!-- {fruits: [mango, bannana, orange]} -->
                ); 
            });
            ```
        * "If this **variable exist**, pass it over `<HtmlElement>`"
        * ```javascript
            <% if (locals.fruits) { %> 
            <%# "If the value (str) for fruits exists, it will be displayed:" #%>
                <ul>
                    <% fruits.forEach((fruit) => { %> 
                    <li>
                        <%= fruit %>
                    <li>
                    <% }) %>
                </ul>
            <% } %>
            ```
    <br />
    * Note: a basic if statement to check if there is var available won't work `if (myVarar)`
        * trying to use and **if statement :** EJS, unlike JS, doesn't scope variabless.
        * It doesn't check if the variables actually exist before it tries them.
        * This may crash our app. 

* **Passing Data:** From **client** (EJS) to **server** side
    * EJS Passing data example
    * In the **JS file**:
    * ```javascript
        // when the user submits some input...
        app.post("/submit", (req, res) => {
            const numLetters = req.body["fName"].length + req.body["lName"].length;
            res.render("index.ejs", { 
                numberOfLetters: numLetters, 
            });
        });
        ```
    * In the **EJS file**:
    * ```javascript
        // The locals. variable checks if the user already introduced some input
        <% if (locals.letterNumber) { %>
            //If the user introduced an input, it will be displayed: 
            <h1>There are <%= letterNumber %> letters in your name.</h1>
        <% } else { %>
            // If the user didn't introduced any input yet: 
            <h1>Enter your name below 👇</h1>
        <% } %>
        ```

###  Partials & Layouts

* The **CSS and the images** that we want to include are **static files**
    * Files that don't ever change.
    * Unlike the files that are being generated dynamically from our back end.
    * Trying to add static files to Node projects won't work.
* Node based backends:
    * We create a **public folder** where we add in all of our **static files**
    * We use the middleware to point out where our static files are located
        * ```javascript
            // In index.js
            app.use(express.static("public"));
        ```
    * We linked to EJS files relative to the location of our public folder
        * `href="/styles/layout.css"`
* Example: if on our website we have some navigation links 
    * Different pages in our website will render different files.
    * But the way that I'm getting to these locations is actually by sending **get requests** to a particular **route**.
        * The **dynamic parts** of our website are routed and their locations are **generated dynamically**
        * whereas , the **static parts** of our website (images, CSS...) doesn't need to be generated dynamically.

#### Templating & Partials

* EJS template engine helps to create an HTML template with minimal code.
* Templating we replace parts of our code using these EJS tags in order to insert bits of dynamic content
    * ```javascript
        <h1>
            Today is <%= todayIs %>. <br /> 
            <%= advice %>
        </h1>
    ```
* Partials: We can use EJS to reduce the repeated code in our website.
    * ```javascript
        <%- inlcude("header.js") %>
        // ... code code code
        <%- inlcude("footer.js") %>
    ```

## Author

Christian Villalba

## Acknowledgments
* [Dr Angela Yu](https://www.udemy.com/course/the-complete-web-development-bootcamp/)
* [Codecademy - Full-Stack Engineer](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path)
* [A simple README](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)