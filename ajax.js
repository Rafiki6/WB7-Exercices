// AJAX (ASYNCRONOUS JS AND XML): Is a technique that allows JavaScripts to send asynchronous HTTP requests(in the background)
// to a web server that manages back-end data.

// API: Is a collection of function that allow clients and serve to exchange specific info.
// API stand for Application Programming Interface.

// The API lives on server : -A client make calls to it, -the API returns info.
// REST APIs: i sa set of rules about how developers create their APIson web server.



fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json,0,4))

fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => console.log(json,0,4));
fetch('https://jsonplaceholder.typicode.com/albums')
.then(response => response.json())
.then(json => console.log(JSON.stringify(json,0,4)));