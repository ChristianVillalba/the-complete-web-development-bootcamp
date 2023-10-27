# API: Application Programming Interface

Notes and projects based on:    
[The Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)          
Instructor: Dr. Angela Yu 

## Description: 
* **01 - JSON**
    * Website that provides recipes to make tacos
    * It shows the title, 3 buttons (ingredients) and the text: "Pick your favourite taco ingredient"
    * Once the users selects their favourite ingredient, the website provides the receipt to prepare the taco based.
* **02 - Axios**
    * Website that provides some task to do when you are bored
    * It fetchs a random activity from that endpoint which is https://bored-api.appbrewery.com/random
    * A random activity that gets populated into a card with the information:
        * Name of the activity
        * Type of activity
        * Number of participants
    * We can request activities with specific type or number of participants 
    * There are cases where the search will fail and produce and Error
    * We handle the Error by passing a message to the user: "No activities that match your criteria"



## Notes

### API: Application Programming Interface

* **API** 
    * Set of definitions, rules and protocols  that define how different software can interact with each other..

    * eg: two programms need to communicate because they provide different pieces of functionality:
    * We place an **interface** between them (API) that bridges the communication between different pieces of software
    * OpenWeather collects data, we pick that data and render dynamic content based on that information
        
    * There are different types of APIs
        * GraphQL, SOAP, Rest:API ...
        * These are arquitectural sytles
        
* **REST APIs**
    * The most common used API on web development
    * It uses the **HTTP protocol** to interact with the API (get, post, put, patch, delete)

### Formatting API Request

* **Private API**
    * Our **frontend** makes a requests to our **server**, server gives a response
* **Public API**
    * Our **server** request to other **server**, that server gives back a response
    * This module is about how to use Public APIs
<br />

* **API Endpoints**
    * <i>BaseURL/<b>endpoint</b></i>
    * The endpoint is basically a different route on the API provider server 
    * The documentation tents to give an example of endpoints and its purpose
* **Query Parameters**
    * <i>BaseURL/endpoint<b>?query=value</b></i>
    * Queries 
        * **?** Marks the start of the query
        * Provide additional information or some parameters to a request
        * Add a key=value pair into the URL 
    * Multiple Query Parameters
        * **&** separates the queries
        * <i>BaseURL/endpoint<b>?query=value&query2=value2&query3=value3</b></i>
* **Path Parameters**
    * <i>BaseURL/endpoint/<b>path-parameter</b></i>
    * Parameter that does change
    * Used to find some specific resource that exists [in the API] (id's , user name...)
    * eg: GET https://bored-api.appbrewery.com/activity/3943506 
* <i>Note: Difference query vs path parameters</i>
    * Query Parameters:
        * Filtering & Searching
    * Path Parameters:
        * Identifying a resource by some specific parameter
    
### JSON: JavaScript object notation

* A way to format data that can be sent over the internet in a **readable and efficient** way.
    * It's structured after a JavaScript object.
    * The key difference is that a Json is serialized into a string.
        * JS Object
        * ```javascript
            const Cristian = {
                name: "Cristian",
                id: 1234,
                genres: ["Heavy Metal", "Rock", "Rap"],
                Weapons: [
                    {primary: "Sword"},
                    {secondary: "Knife"}
                ]
            }
            ```
        * JSON
        * ```javascript
            {
                "name": "Cristian",
                "id": 1234,
                "genres": ["Heavy Metal", "Rock", "Rap"],
                "Weapons": [
                    {primary: "Sword"},
                    {secondary: "Knife"}
                ]
            }
            ```
        * When transfered will look in one single line:
        * ```javascript
            {"name": "Cristian", "id": 1234,"genres": ["Heavy Metal", "Rock", "Rap"],
            "Weapons": [{primary: "Sword"},{secondary: "Knife"}]}
            ```
* Tool: JSON Visualizer
    * Adapts JSON file to human-readable format
    * [Online JSON Viewer](https://jsonviewer.stack.hu/)
* **Serialization**
    * Turning a **JS Object** into a **Json**.
    * Neccessary to send a Json across the internet
    * It's a method available in the Json Module
        * `const jsonData = JSON.stringfy(data);`
    * JavaScript object into a string able to represent all of the different nesting and relationships in that object.
* **Deserializing / Json Parsing**
    * Turning a **Json** into a **JS Object**.
    * It's a method available in the Json Module
        * `const data = JSON.parse(jsonData);`
<br />

<!-- * 01 - JSON: How it works:
    * [in index.js]
    * When we click on the buttons, a **post** request is sent (`/recipe` route)
    * The **value** of the request will change depending on the button pressed
    * The **value** is accessed using `bodyParser`
        * We can acces body thanks to bodyParser in `switch (req.body.choice)`
    * `switch` will check what opttion the user chooses and we sent the relevant piece of `data` 
        * `data = JSON.parse(recipeJSON)[0];` parses our data (receiptJSON) into a JS Obj stored as "data"
        * We extracted the item choosen, same as a JS Array `[0] / [1] / [2]`
        * *Note:* `const recipeJSON` (our data) is included in our file, but it could be provided by a 3rd pary api
    * We set the data `let data`
    * And we send it over when we render our JS file `{receipt: data}`
        * At the bottom of the file, `res.redirect("/")` goes to `app.get("/", ...` sends the data under the key of recipe `{receipt: data}`
    * The **value** is located in the index.ejs file
    * [in index.ejs]
    * We check if our recipt exits `<%if (locals.recipe) {%>`

    * Notes: 
        * Recipe.json includes all the recipes in a deserailized format
        * RecipeJSON in index.js, shows the recipes in a serialized format (long string) to be easyly transfered. -->

### Axios: Server-side API Requests

* Previously we saw how to:  
    * Structure our API requests 
    * Make our API requests (from Postman)
* **Server-side API Requests** 
    * **Our Server** makes the **API requests** to **Someone's else Server**:
    * ```
        Our Server → Get Request → 3rd party Server    
        3rd party server → Response → Our Server
        ```
    * **Note:** This is a common operation when we're dealing with node and express backends.
    * We can make this through a Public API
    * Using **native node modules** (such as the Https module)
        * The code for this would look quite long and complicated   
<br/>

* **Axios** 
    * "Axios is a promise-based HTTP Client for node.js and the browser"
    * It's a native node module available in npm
        * `npm install axios`
    * It makes the **Request & Responses** much **simplier**
    * It simplifies the commonly used methods and requirements
    * Our request (`axios.get`) is promised based so we can use `.then` or `async`'s `await` to handle the Response 
    * When we have **JSON data** back, Axios **automatically turn** it into a **JS Object** 
        * No extra step: JSON.parse
    * Axios also has much better error handling
<br />

### API : Authentication and Authorization

* **Authentication** verifies the **identity** of a user or service
* **Authorization** determines their **access rights**

**Protect the resources** behind our API by using authentication &  authorization:
* We need to identify who is the client making the request.
* Check if the client has permission to access that resource.
* Give back a response depending on whether the client is authorized to make that request.

Authentication: 4 Tiers (Non Offical) 
* 0 - No Authentication 
    * No changing data that needs to be protected.
    * No data that needs to be assigned to a particular user.
    * It's super inclusive: Anyone can use it.
    * It's super easy to get started
    * eg: Prevents the abuse of the API by adding a rate limit
    * eg: 100 requests every 15min. Check the IP and the number of requests  
* 1 - Basic Authentication
    * Authenticating to the API provider.
    * Using **Username and Password** when you make your API request
    * Usually, authentication is done is by passing over a **base 64 encoded** string in the header of the request.
    * **Base 64 Encoding:** 
        * taking text (ASCII), 
        * coverted it to bits, 
        * and encoded in another character (64 encoded) 
        * the ouput will be a different string
            * eg: username & password are encoded together in a **base 64**
        * The result will be added to an autherization header that will be passed along during when the request is made

* 2 - API Key Authorisation
* 3 - Token Based Authentication  





## Author

Christian Villalba

## Acknowledgments
* [Dr Angela Yu](https://www.udemy.com/course/the-complete-web-development-bootcamp/)
* [Codecademy - Full-Stack Engineer](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path)
* [A simple README](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)