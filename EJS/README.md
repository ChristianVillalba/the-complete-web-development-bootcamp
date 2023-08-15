# EJS: Embedded Javascript

Notes and projects based on: EJS module         
[The Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)          
Instructor: Dr. Angela Yu 

## Description: 

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


## Author

Christian Villalba

## Acknowledgments
* [Dr Angela Yu](https://www.udemy.com/course/the-complete-web-development-bootcamp/)
* [Codecademy - Full-Stack Engineer](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path)
* [A simple README](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)