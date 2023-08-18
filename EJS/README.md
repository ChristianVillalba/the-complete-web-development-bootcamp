# EJS: Embedded Javascript

Notes and projects based on: EJS module         
[The Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)          
Instructor: Dr. Angela Yu 

## Description: 

* Introduction EJS
    * Generates a H1 Element
    * It gives an advice depending of the day of the week
    * Run Introuduction EJS
        * `node index.js`


### Starting EJS & Dependencies
* Initialize NPM 
    * `npm init -y`
* Install express & ejs
    * `npm i express ejs`
* Edit package.json:
    * `"type": "module",`


## Notes

###  EJS: Embedded Javascript
* EJS or Embedded Javascript Templating is a templating engine used by Node.js
    * The separation of concerns: we need to use something called a templating language.
    * Template engine helps to create an HTML template with minimal code. 
    * It can inject data into an HTML template on the client side and produce the final HTML.
* It's almost like having a JavaScript module that can run JS code inside a HTML file 
    * It ends with the `.ejs` file extension.
    * Essentially all we've got is just HTML, but with bits of JS enclosed inside a special syntax
* ***Note: It might require EJS Language Support for our text editor***
    * [EJS language support](https://marketplace.visualstudio.com/items?itemName=DigitalBrainstem.javascript-ejs-support)
* ***Note: It requires Express, and ejs***
    * `$ npm install ejs`
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

* From **server** to **client** side (JS File)
    * `res.render()` method:
        * firstly the name of the JS file
        * then, any sort of data that we want to render.
        * ```javascript
            app.get("/", (req, res) => {
                res.render("index.ejs", { 
                todayIs: todayIs,
                advice: adviceOfTheDay,
            }); 

        ```

and from client to server side.

## Author

Christian Villalba

## Acknowledgments
* [Dr Angela Yu](https://www.udemy.com/course/the-complete-web-development-bootcamp/)
* [Codecademy - Full-Stack Engineer](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path)
* [A simple README](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)