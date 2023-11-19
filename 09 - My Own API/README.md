# Building My Own API

Notes and projects based on: Building Your Own API        
[The Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)          
Instructor: Dr. Angela Yu 

## Description
Joke API
A RESTful API - It serves jokes to anybody that wants to access this API 


## Notes

### APIs

APIs make development so much faster.
Instead of building out everything from scratch
you can leverage other people's existing data,  services and/or algorithms in order to build a product on top of that existing API.
It is a really valuable service.
So that's why people often charge for it

* ***Resource:*** **Rapid API**
    * It collates and allows people to host APIs that customers or clients can consume
    * Rapid API also has free APIs that can be used for developers.

* **What makes an API valuable**
    * Large and valuable data collection.
    * Proprietary algorithm or useful service 
    * Simplified interface:
        * Simplified API for people to be able to work with something else:    
         A real world service or another API.

* **Types of API**
    * Open API
        * Open source: You can access and use the source code.
        * The API is free to use and open to the public
    * External or Public APIs, 
        * No access to source code
        * These are available for anybody
        * User may need to pay or sign up to use the API
    * Internal APIs
        * Any backend not opened to be used by others
        * Not documented, not granteed to be supported
        * In many cases, a private or internal API is something that is not supported for external use...
        * But unless you have security features in place, it doesn't mean that it can't be accessed.
    * REST APIs

* REST API: REpresentational State Transfer API
    * It uses standard Http methods:
        * get post put patch & delete
    * It outups standard data format : Json, XML
        * This is the **representation** part of the **representational state transfer.**
        * Resources are represented in a specific format that is sent in response to the client.
    * Clients and servers in restful APIs are **separate**
        * They are not in the same sytem, not in the same file but still able to communicate over a network.
        * This part of the RESTful architecture allows each side to scale independly
    * Stateless
        * Each request from the client to the server should contain all the information to process the request
        * The server shouldn't be storing any sort of client's state or data between the requests
        * Each request and each response should be completed independenly of what happened previously
        * Allows better scalability (API) and simplifies the server side implementation.
    * Resource based
        * It is centered around resources and uses **a unique resource identifier URI** or **unique resource locator URL**
    <br />

    * The Internet as we know it is considered one of the most successful implementations of Restful architecture 

### Building My Own API

Get Method

## Author

Christian Villalba

## Acknowledgments
* [Dr Angela Yu](https://www.udemy.com/course/the-complete-web-development-bootcamp/)
* [Codecademy - Full-Stack Engineer](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path)
* [A simple README](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)

