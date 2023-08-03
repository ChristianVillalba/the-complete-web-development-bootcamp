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



## What I’ve learned from this project



## Author

Christian Villalba

## Acknowledgments
* [Dr Angela Yu](https://www.udemy.com/course/the-complete-web-development-bootcamp/)
* [Codecademy - Full-Stack Engineer](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path)
* [A simple README](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)