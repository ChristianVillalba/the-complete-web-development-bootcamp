# EXPRESS JS WITH NODE JS

Notes and projects based on: Bootstrap module        
[The Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)          
Instructor: Dr. Angela Yu 

## Description: 


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
        * `npm init -y` 
        *  Initialise without having it ask any questions:
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

* Create a Backend without Frontend 
    * Useful to create backends or API's and test them as soons as possible.
* [Download Postman](https://www.postman.com/downloads/)

## Express Middleware

* Express is a routing and middleware web framework that has minimal functionality of its own: 
    * An Express application is essentially a series of middleware function calls.
* Middleware functions have access to the **request object** (req), **the response object** (res), and the **next middleware function** in the application’s request-response cycle. 
<br/>

* So when a **request** comes in to the **server**... 
* ...and before it gets **processed** by all of the **route handlers**, 
    * such as our get, pos, put, functions that we've planned for how to deal with a particular request, 
* **The middleware** (something in between) is able to work with these requests before they get processed and reach their final destinations.
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

### Custom Middleware

* Morgan: HTTP Rrequest logger middleware for node.js
    * when we send a request to our server,
    * the morgan middleware function gets trigger before the server gives back its response
    * 

## What I’ve learned from this project



## Author

Christian Villalba

## Acknowledgments
* [Dr Angela Yu](https://www.udemy.com/course/the-complete-web-development-bootcamp/)
* [Codecademy - Full-Stack Engineer](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path)
* [A simple README](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)