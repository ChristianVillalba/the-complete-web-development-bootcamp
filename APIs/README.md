# API: Application Programming Interface

Notes and projects based on: EJS module         
[The Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)          
Instructor: Dr. Angela Yu 

## Description: 

## Notes

### API: Application Programming Interface

* **API** 
    * Set of definitions, rules and protocols for building and integrating application software.
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
    
### Introduction to JSON

* Json: JavaScript object notation.
* A way to format data that can be sent over the internet in a readable but also efficient way.
    * it's structured after a JavaScript object.
    * The key difference is that a Json is serialized into a string.
        *  






## Author

Christian Villalba

## Acknowledgments
* [Dr Angela Yu](https://www.udemy.com/course/the-complete-web-development-bootcamp/)
* [Codecademy - Full-Stack Engineer](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path)
* [A simple README](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)