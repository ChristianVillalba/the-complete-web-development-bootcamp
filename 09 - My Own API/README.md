# Building My Own API

Notes and projects based on: Building Your Own API        
[The Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)          
Instructor: Dr. Angela Yu 

## Description

## Notes

APIs make development so much faster.
Instead of building out everything from scratch
you can leverage other people's existing data,  services and/or algorithms in order to build a product on top of that existing API.
It is a really valuable service.
So that's why people often charge for it

Resource: Rapid API
* It collates and allows people to host APIs that customers or clients can consume
* Rapid API also has free APIs that can be used for developers.

### What makes an API valuable

* large and valuable data collection.

* proprietary algorithm or useful service 

* simplified interface
    * Simplified API for people to be
able to work with something else:
    * A real world service or another API.

### Types of API

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
* REST API: REpresentational State Transfer API
    * 1️⃣ It uses standard Http methods.
        * get post put patch and delete
    * standard data format outup: Json, XML
        * This is the representation part of the representational state transfer.
        * Resources are represented in a specific format that is sent in response to the client.
    * clients and servers in restful APIs are completely separate
        * Not in the same sytem, not in the same file but able to communicate over a network.
        * This part of the RESTful architecture allows each side to scale independly
    * Stateless
        * Each request from the client to the server should contain all the information (to process the request)
        * The server shouldn't be storing any sort of client's state or data between the requests
        * Each request and each response should be completed independenly of what happened previously
        * Allows better scalability (API) and simplifies the server side implementation.


### Building My Own API

## Author

Christian Villalba

## Acknowledgments
* [Dr Angela Yu](https://www.udemy.com/course/the-complete-web-development-bootcamp/)
* [Codecademy - Full-Stack Engineer](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path)
* [A simple README](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)

