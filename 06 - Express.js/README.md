# EXPRESS JS WITH NODE JS

Notes and projects based on:         
[The Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)          
Instructor: Dr. Angela Yu 

## Description: 

Lessons about middleware:
* index1.js
    * How to use body-parser
* index2.js
    * How to use morgan
* index3.js
    * How to use custom middleware and combine middlewares
* index4.js
    * A Band Name Generator
        * User enter 2 inputs
        * The combination of both inputs generates a Band Name
        * Combines Body-Parser and our custom middleware

## Notes

###  EXPRESS JS WITH NODE JS
* Express.js is a back end **web application framework** for building web applications and APIs with Node.js.
* As a Node framework, it offers:
    * Better readability
    * Less code
    * Ability to add middleware

### Express Server
* The back-end consist on:
    * **A server** is a piece of computer hardware or software that provides functionality for other programs or devices, called "clients". It receives requests.
    * **An application** running on the server that listens for requests, retrieves information from the database, and sends a response.
    * **A database** used to organize and persist data.
<br /> 

* The back-end is also called Server Side
    * I created an application in JavaScript using Express and Node.
    * Express is the one that's going to use Node 
    * Our computer will work as a server
<br /> 

* Creating a Express Server:
    1. Create a directory
    2. Create index.js file
    3. Initialise NPM
        * Initialise without having it ask any questions:
        * `npm init -y` 
        
    4. Install Express Package
        * `npm install express`
        * [Installing - Expressjs Documentation](https://expressjs.com/en/starter/installing.html)
        * *Notes:* edditing package.json   
            * To use Express, this file should have `express` in `dependencies`
            * `"main"` must be set to `"index.js"` and we need a file called **index.js**
            * In order to use ES6 syntax:      
                * We have to change our package.json to have the type set as module:
                * `"type": "module"`
    5. Write server app in index.js
    6. Start Server
        * In Terminal: `node index.js`
        * In Browser: `http://localhost:3000/`
<br /> 

* **Localhost**
    * We don't have a server on the Internet so we host our server locally.

### HTTP Request

* **HTTP (Hypertext Transfer Protocol)** is used to structure requests and responses over the internet.
    * Http is a language for client computers to communicate with the servers

* **Request Vocabulary:**
    * GET
        * you want to REQUEST a resource from the server
    * POST
        * you SEND a resource to the server
    * PUT 
        * Update: REPLACE a resource
    * PATCH
        * Update: PATCH UP a resource
    * DELETE
        * Delete a resource

* **HTTP Response Status codes**
    * 100 - 199
        * Informational responses
    * 200 - 299 
        * Successful responses
    * 300 - 399
        * Redirection messages
    * 400 - 499
        * Client Error Responses
    * 500 - 599 
        * Server Error Responses
    * [HTTP response status codes - MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
    
### Postman 

* It creates a Backend without Frontend 
    * Useful to create backends or API's and test them as soons as possible.
* [Download Postman](https://www.postman.com/downloads/)

## Express Middleware

* Middleware:  is a type of computer software that 
    * provides services to software applications
    * help developers and operators build and deploy applications more efficiently
    * software glue: the connective tissue between applications, data, and users

* Middleware have access to 
    * the **request object** (req), 
    * the **response object** (res), 
    * and the **middleware function**  (something in between) in the application’s request-response cycle. 
<br/>

* So when a **request** comes in to the **server**... 
* ...and before it gets **processed** by all of the **route handlers**, 
    * such as our get, pos, put, functions that we've planned for how to deal with a particular request, 
* **The middleware** is able to work with these requests before they get processed and reach their final destinations.
* Middleware can be used to... 
    * Pre-processing: change aspects of the request or perform various functions on that request before it goes to its final routing.
    * Logging the requests.
    * Authentication
    * Process Errors
<br/>

* Middleware functions can:
    * Execute any code.
    * Make changes to the request and the response objects.
    * End the request-response cycle.
    * Call the next middleware function in the stack.
<br/>

* Middleware: body-parser
    * `npm install body-parser`
    * Node.js body parsing middleware. 
    * Parse incoming request bodies in a middleware before your handlers.
        * Available under the `req.body` property.
        * Very commonly this is used to handle form data.
        * *Parse:* resolve (a sentence) into its component parts and describe their syntactic roles.
    * Express.js `res.sendFile()` Function
        * It requires a **exact path** in order to know which file to send back
        * In order to get the full path to our index.html:
            * ```javascript
                // this will generate all of the path up until the path that we want to access
                import { dirname } from "path";
                import { fileURLToPath } from "url";
                const __dirname = dirname(fileURLToPath(import.meta.url));
                // ...
                // We will use the dynamically generated path to our folder 
                    res.sendFile(__dirname + "/public/index.html");
                    // to check the path (in index1.js > listen function):
                    console.log(__dirname + "/public/index.html")
            ```
        * Now that we have the path, we can use middleware: Body Parser
            * ```javascript
                // the neccessary imports:
                import express from "express";
                import bodyParser from "body-parser";
                // ...
                // body-parser as middleware
                app.use(bodyParser.urlencoded({ extended: true }))
                // bodyParserwe.urlencode : we tell what data we want to parse - an HTML FORM
                // { extended: true } : OBLIGATORY OPTION. 
                // just determines what is being used behind the scenes to pass the data that's coming in.

                // Now every single request has a "body"
                app.post('/submit', (req, res) => {
                    console.log(req.body);
                }) 
            ```
<br/>

* Middleware: Morgan 
    * HTTP Request logger middleware for node.js
        * when we send a request to our server,
        * the morgan middleware function gets trigger before the server gives back its response
        * It output in our console the logging information about the request
    * ```javascript
        import express from "express";
        import morgan from "morgan"

        const app = express();
        const port = 3000;
        app.use(morgan("dev")); // combined, tiny, short ... check documentation


        app.get("/", (req, res) => {
            res.send("Hello");
        });
    ```

        
### Custom Middleware

* After seeing Body-parser & Morgan
* **Custom our own middleware:**
* ```javascript
    app.use((req, res, next) => {
        console.log("Reqest medhod: ", req.method);
        next()
    })

    ```
* In all of the used middlewares, the `app.use` method to specifies a middleware to use when the request comes in.
* And inside there we can pass in a function: 
    * It has a request, a response object & a next method
* `next()` : proceed to the next step of handling that request if there is another middleware
    * It's very important to express the order that we put our middleware
    * eg: If you want your request to be authenticated before you log the request or before you pass the request


## Author

Christian Villalba

## Acknowledgments
* [Dr Angela Yu](https://www.udemy.com/course/the-complete-web-development-bootcamp/)
* [Codecademy - Full-Stack Engineer](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path)
* [A simple README](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)