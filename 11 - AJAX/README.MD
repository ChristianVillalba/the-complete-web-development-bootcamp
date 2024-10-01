## AJAX Fundamentals for Intermediate Web Developers

* **1 - AJAX**
    * Definition:     
        * AJAX (Asynchronous JavaScript and XML) is a technique that allows web pages to update asynchronously by exchanging small amounts of data with the server behind the scenes.
        * Enables web applications to send and receive data without reloading the entire page.
    * Core Technologies:
        * JavaScript: For creating AJAX requests.
        * XMLHttpRequest (XHR): The object used to interact with servers.
        * JSON: Commonly used data format in AJAX instead of XML.
        
* **2 - Basic Structure of an AJAX Request**
    * Steps to Perform an AJAX Call:
        * Create an XMLHttpRequest object.
        * Define a callback function to handle the server's response.
        * Open a connection to the server.
        * Send the request to the server.
    * Basic Syntax Example:
    ```javascript
    // 1. Create an XMLHttpRequest object
    var xhr = new XMLHttpRequest();

    // 2. Define a callback function
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // 5. Handle the response
            document.getElementById("result").innerHTML = xhr.responseText;
        }
    };
    // 3. Open a connection
    xhr.open("GET", "server-script.php", true);
    // 4. Send the request
    xhr.send();
    ```

* **3 - Handling Responses - Response Types:**
    * **Text:** xhr.responseText - Returns the response as a **string**.
    * **XML:** xhr.responseXML - Returns the response as an **XML document**.
    * Handling JSON Response:
    ```javascript
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            document.getElementById("result").innerHTML = data.message;
        }
    };
    ```

* **4 - Common AJAX Methods: GET VS POST**
    * GET:
        * Used for requesting data from a server.
        * Data is appended to the URL.
        * Limited data size.
    * POST:
        * Used for sending data to the server (e.g., form submissions).
        * Data is sent in the request body.
        * Can handle larger amounts of data.
    * Example: GET Request
    ```javascript
    xhr.open("GET", "server-script.php?name=John", true);
    xhr.send();
    ```
    * Example: POST Request
    ```javascript
    xhr.open("POST", "server-script.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("name=John&age=30");
    ```

* **5 - AJAX with JSON**
    * Sending JSON Data:
    ```javascript
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "server-script.php", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    var data = JSON.stringify({ name: "John", age: 30 });
    xhr.send(data);
    ```
    * Handling JSON on the Server (PHP Example): 
    ```php
    <?php
    $data = json_decode(file_get_contents("php://input"), true);
    $name = $data['name'];
    $age = $data['age'];
    echo json_encode(["message" => "Hello, $name. You are $age years old."]);
    ?>
    ```

* **6 - AJAX Error Handling**
    * Handling Errors:
    ```javascript
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                document.getElementById("result").innerHTML = xhr.responseText;
            } else {
                document.getElementById("result").innerHTML = "Error: " + xhr.status;
            }
        }
    };
    ```
    * Timeouts:
    ```javascript
    xhr.timeout = 5000; // Set timeout to 5 seconds
    xhr.ontimeout = function() {
        alert("The request timed out.");
    };
    ```

* **7 - Using AJAX with jQuery**
    * Simplifying AJAX Calls with jQuery:    
     jQuery provides easy-to-use methods for AJAX, such as `$.ajax()`, `$.get()`, and `$.post()`.
    * GET Request with jQuery. Example: 
    ```javascript
    $.get("server-script.php", { name: "John" }, function(data) {
        $("#result").html(data);
    });
    ```
    * POST Request with jQuery. Example:  
    ```javascript
    $.post("server-script.php", { name: "John", age: 30 }, function(data) {
        $("#result").html(data);
    });
    ```
    * Handling JSON Responses with jQuery. Example: 
    ```javascript
    $.post("server-script.php", { name: "John" }, function(data) {
        var response = JSON.parse(data);
        $("#result").html(response.message);
    });
    ```