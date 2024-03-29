# API: Application Programming Interface

Notes and projects based on:    
[The Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)          
Instructor: Dr. Angela Yu 

## Description: 
Projects in this module:
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
* **03 - API Authentication**
    * Server side requests using the API: https://secrets-api.appbrewery.com/ 
    * Website that uses the Secrets API in order to reveal secrets wrote by the users
        * *Note:* It uses **axios** to make the requests
        * "No authentication" gives us a random secret 
        * "Basic authentication" will use the get/all path
        * "The API key authentication" will get us the filtered endpoint 
        * "Bearer token authentication" will get us a secret with a particular ID
        * These are the authentication examples using Postman that I alredy practiced       
        but this time the requests were made from the server
* **04 - REST APIs**
    * Using the API: https://secrets-api.appbrewery.com/ 
    * Using GET
        * We're able to get a **secret** by the **ID** of the secret 
        * default secrets ids available: 1-50
    * Using POST: 
        * To post a new secret
        * We need to include a secret and a score
        * We don't need to include an id when creating a new secret
        * Id will be automatically created in the post route as per the documentation
    * Using PUT
        * It changes a secret by making a put request
        * Remember: with put requests, we have to provide all of the data (id, secret, score).
    * Using PATCH
        * It can simply just change one thing (id, secret or score)
        * No need to have to provide all of the data.
    * Using DELETE
        * We're able to delete a **secret** by the **ID** of the secret 
* **Project - Secrets**
    *  Final project of the module: 
        * A secrets project  a client side website that uses the Secrets API in order to reveal random secrets of people anonymously.
            * No authorization is required.

secrets of people anonymously

#### How to run the programs
* Open the terminal
* Change directory to the lesson we want to review
* Run the command:
```
node index.js
```
* Terminal shows a message: "Server is running on port 3000"
* Open the browser, and go to: http://localhost:3000/

***Note***: Every programm needs their own additional packages     
Check individual project's folder: package-lock.json > packages > dependencies      
Installing the packages
* Open the terminal
* Change directory to the folder where we need the packages
* Run the command:
```
npm i myPackage
```

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
1. We need to identify who is the client making the request.
2. Check if the client has permission to access that resource.
3. Give back a response depending on whether the client is authorized to make that request.

#### Authentication: 4 Tiers (Non Offical) 
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
    * Note: **Base 64 Encoding:** 
        * taking text (ASCII), 
        * coverted it to bits, 
        * and encoded in another character (64 encoded) 
        * the ouput will be a different string
            * eg: username & password are encoded together in a **base 64**
        * The result will be added to an autherization header that will be passed along when a request is made
* 2 - API Key Authorisation
    * **Authentification:** user can be authenticate (identify) themselves when registering/loggin in
    * **Authorisation:** allows (or not) a client to use a server with an **API key** 
    * Assotiation: **API KEY & User**
        * If the **API Key** is associated with an **user**
            * Users authenticate themselves 
            * Then, getting an API Key, they authorize themeselves.
        * If there is no need to be registered to use the API:
            * Clients get hold of an **API key** 
            * Then, authorize themselves with the API provider.
    * A lot of public APIs use API keys
        * eg: Google Maps API + Its different APIs 
    * **API Key** it is just a **reusable code** to access a API
        * API keys can be deleted and regenerated
        * If somebody intercepts this API key, they won't be able to get hold of the username and password
    * We can then track the usage per API key.
    * There's a lot of **costs involved**
        * It's often that 3rd parties will **charge** for using their APIs
        * They can determine how much they should charge by looking at how
        often you're needing to make requests through your API key
        * This is useful to know both as an API user as well as an API provider
    * Note: **API Keys:**
        * Sometimes the API requires you to add it to the **header** of the request.
        * Other times it requires you to add it to the **query parameter**.
        * It depends on the API. Check **documentation**. 
* 3 - Token Based Authentication  
    * It is even more secure because
    * User needs a username and password to log in
    * We generate a **token** to be used with the API 
    * It's the **token** that's constantly being used to **interact with the API**
        * The API doesn't get involved with the username and password
    * **OAuth and OAuth 2.0** is the most common industry **standard** for **token based authentication**     
    * Every time we've asked if we want to authorize a particular app on the behalf of your Google account, we have performed a **token based authentication**
    * This is commonly used when we want perform an action on behalf of a user (delete, change...)
        * We would be interacting with a service **as if we were the user**.
        * **BUT** thanks to user token based authentication, we **never need** to get hold of **username & password**
    * Eg: An app that uses the weather app and google calendar to warn you to take an umbrella 
        * OAuth - grant access to the Google Calendar API's data
            * if we were **not** using token based authentication:
                * provide the username and password, 
                * we can use this to interact with the Google calendar API.
            * using **token based authentication**: 
                * user to sign in with Google
                * this **generates a token** for us to get hold of and 
                * then we can use this token to interact with the Google Calendar API 
                * all of that security stuff is handled by Google
                * this is a way more secure way of doing API authentication.

#### Example: Basic Authentication using POSTMAN
API: https://secrets-api.appbrewery.com/
* Endpoint: GET /random
    * Returns a random secret. 
    * No authentication is required.
* Endpoint: GET /all:
    * Returns all secrets, paginated. 
    * Basic authentication is required.

Steps in Postman to get access to *endpoint*/all
* 1 - Register Ourselves:
    * Use *endpoint*/register
    * POST request > ✔ Body > ✔ x-www-form-urlencoded
    * Key(s): username & password
    * Value(s): *user's personal values*
    * Send > ✔ Status: 200
* 2 - Access *endpoint*/all
    * Use *endpoint*/all?page=1
    * GET request > ✔ Authorization > ✔ Type: Basic Auth
    * Use Username & Password registred in the previous step
    * Send > ✔ Status: 200
* Postman: Basic Authorization 
    * GET request > Send > ✔ Status: 200 (Behind the scenes)
    * Postman will automatically generate the authrization header
    * The authorization header will be based on the username & password
    * If we go to ✔ Headers Tab (from Authorization Tab)
    * Key: *Authorization*
    * Value: *Basic 5asdfaf4gSDEFHGG00whatever* (This string represents our username+password)
    * If we copy-paste the string in a BASE64 decoder : It will output our *username:password*
    * Postman automatically 
        * Creates the **headers**
        * **Encodes** the username & password into a **string**
        * Adds the type of authentication to that string: **basic**
        * Includes all the output to the header
* ***Note:*** In most cases, such as using a library like Axios, it'll be able to generate all of that for us just by providing your username and password.

#### Example: API Key Authorisation using POSTMAN
API: https://secrets-api.appbrewery.com
* Endpoint: GET /generate-api-key    
    * To generate an API Key
* Endpoint: GET /filter?score=1&apiKey=b886c845-9989-43aa-8c60-ea4a669bb587
    * To Filter the results
    * It requires an API Key to be accessed

Steps in Postman to be able to use *endpoint*/filter
* 1 - Generate an API Key
    * Use *endpoint*/generate-api-key
* 2 - Access *endpoint*/all/filter?score=5&apiKey=b886c845-9989-43aa-8c60-ea4a669bb587
    * To filter the results, ir requires 2 parameters: 
    * **score:** The minimum embarrassment score to filter by.
    * **apiKey:** Your API Key generated from the /generate-api-key endpoint.
    * In Postman GET *endpoint*/filter
        * ✔ Params > 
            * Key : score | value: 1-7
        * ✔ Authorization > ✔ Type: API Key > 
            * Key : apiKey | value: *key generated in step 1* | Add to: Query Params
            * *Note:* "Add to:" ***Header/Query Params*** would depend on the specific documentation

#### Example: Token Based Authentication using POSTMAN
API: https://secrets-api.appbrewery.com
* Endpoint: POST /get-auth-token    
    * Generates an authentication token for a user
* Endpoint: POST /secrets/***{id}***    
    * Returns the secret with the specified **ID** .
    * Bearer token authentication is required.

Steps in Postman to get access to *endpoint*/secrets/{id}
* 0 - Register an username & password if neccesary 
    * See exameple: "Basic Authentication using POSTMAN" 
* 1 - Generates an authentication token for a user
    * Use *endpoint*/get-auth-token
    * POST request > ✔ Body > ✔ x-www-form-urlencoded
    * Key(s): username & password
    * Value(s): *user's personal values registered* 
    * Send > ✔ Status: 200
    * See provided **token** as reponse
        * eg: { "token": "dd01030a-ea87-4841-95dd-a9d3bc71303d" }
* 2 - Retrieve secrets by id
    * Use *endpoint*/secrets/***2*** **(2 = id of the post we want to retrieve)**
    * In Postman GET *endpoint*/secrets/...
    * ✔ Authorization > ✔ Type: Bearer Token >
        * Token: **add token received in previous step**
    * Send > ✔ Status: 200
        * Retrives post with `"id": 2`

### REST APIs

* ***Note:*** Difference - Promises
    * `.get()` > `.then()` > `.then()`
        * .then will get triggered only when .get gets resolved
        * .then can be **chained** to happen in order
    * `async` > `await` > `axios.get()`
        * Everyting is inside a func marked as async.
        * Inside of it, the asynchronous process inside the func is marked as **await**: 
            * "Wait until this process is done before continue."
        * Structures our code as synchronous code.
        * It may be easier to debug.
    * Both methods are documented in the **Axios Documentation**

#### Axios: HTTP REQUESTS

* `.get()` 
    * Two Parameters: **url & conf Obj** (conf Obj is Optional)
    * ```javascript
        await axios.get("URL", conf)
        // you can pass parameters in the config: auth, tokens..
        // see API Authentication/index.js for examples
        ```
<br/>

* `.post()` 
    * Three Parameters: **url, body/data & conf Obj**
    * ```javascript
        await axios.post("URL", bodyOfTheFormData, conf)
        // {fName: christian, id:0987, tools: [python, js, php] }
        ```
* `.put()`
    * provides all of the data that we want to update in our backend
    * ```javascript
        await axios.put("URL", bodyOfTheFormData, conf)
        ``` 
* `.patch()`
    * Provide any bit of the data we want to update. 
    * Everything else in the resource stays as it is.
    * ```javascript
        await axios.patch("URL", bodyOfTheFormData, conf)
        // {fName: Cristian}
        ``` 
* `.delete()` 
    * Parameters: **url & conf Obj**
    * ```javascript
        await axios.delete("URL", conf)
        // you can pass parameters in the config: auth, tokens..
        // see API Authentication/index.js for examples
        ```

## Author

Christian Villalba

## Acknowledgments
* [Dr Angela Yu](https://www.udemy.com/course/the-complete-web-development-bootcamp/)
* [Codecademy - Full-Stack Engineer](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path)
* [A simple README](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)