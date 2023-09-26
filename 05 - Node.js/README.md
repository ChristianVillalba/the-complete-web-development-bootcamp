# NODE JS

Notes and projects based on: Bootstrap module        
[The Complete Web Development Bootcamp](https://www.udemy.com/course/the-complete-web-development-bootcamp/)          
Instructor: Dr. Angela Yu 

## Description: QR Code Generator
* This project will ask the user to introduce an URL
* IT will return a QR Code as a PNG image
* It will save the URL in the file URL.txt

**NodeJS's packages** to generate **QR codes** from any URL.
* It uses 2 npm pacakeges:
    * [Inquirer.js](https://www.npmjs.com/package/inquirer)
        * Strives to be an easily embeddable and beautiful command line interface for Node.js 
    * [qr-image](https://www.npmjs.com/package/qr-image)
        * This is a QR Code generator.
    * *Note:*  in order to use the import function,      
    we have to change our package.json to have the type set as module.

#### Dependencies
* node.js

**NodeJS's packages** to generate **QR codes** from any URL.
* It uses 2 npm pacakeges:
    * [Inquirer.js](https://www.npmjs.com/package/inquirer)
        * Strives to be an easily embeddable and beautiful command line interface for Node.js 
    * [qr-image](https://www.npmjs.com/package/qr-image)
        * This is a QR Code generator.
    * *Note:*  in order to use the import function, and ES6 syntax:      
    we have to change our package.json to have the type set as module.

#### How to run the program
* change directory to: ***Project - QR Code Generator***
* run the command:
```
node index.js
```

## Notes

### Node

* Node.js is an asynchronous event-driven JavaScript runtime.
    * **Asynchronous**: JavaScript code doesn't have to do everything in sequential order.
    * **Event-Driven**: the order can be dictated by events in order to free up resources.
    * Node provides us with a **JavaScript runtime** so that we can run JavaScript on a machine.
        * such as your own local computer.
        * **The runtime environment** is the environment in which a program or application is executed. It's the hardware and software infrastructure that supports the running of a particular codebase in real time.
* NodeJS is designed to build scalable network applications,
* Node.js allows us to create a backend using Javascript     
    * It is fast and will allow us to create really scalable and fast running web sites.
    * Node.js allows us to take Javascript out of the browser and it liberates it...      
        * allowing it to interact directly with the hardware of a computer.     
<br>

* Native Node Modules
    * Node, already comes bundled with a whole bunch of built in modules.       
    * After liberating JavaScript from the browser using Node,      
        * We can now use Node.js to interact with the computer directly.
        * eg: use Node.js to get access directly to the local files of the computer.  
    * All of the native modules and the documentation of how you can use it:    
        * [Node Documentation](https://nodejs.org/api/)
* NPM (Node Package Manager) 
    * We can install External Node Modules
        * Besides the Native Node module.
    * NPM is a package manager for external modules
        * NPM gets bundled with Node.       
        * It's currently the world's largest collection of packages of code.      
        * [Check packages available](https://www.npmjs.com/)
    * These packages on NPM are bits of reusable code that somebody else wrote,      
        * and using NPM we can incorporate those packages into our own projects.      
    


## What I’ve learned from this project

* Node
* Node REPL (Read Evaluation Print Loop)
* Native Node Modules
* NPM (Node Package Manager) 

## Author

Christian Villalba

## Acknowledgments
* [Dr Angela Yu](https://www.udemy.com/course/the-complete-web-development-bootcamp/)
* [Codecademy - Full-Stack Engineer](https://www.codecademy.com/learn/paths/full-stack-engineer-career-path)
* [A simple README](https://gist.github.com/DomPizzie/7a5ff55ffa9081f2de27c315f5018afc)