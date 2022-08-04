// ----------------------------------------------7.18-----------------------------------------------

// let array = [5,6,-1,2,12,-5,27,3];

// let sum = 0;

// for(i of array){
//     sum += i
//     };

// array.forEach((i) => {sum += i})

// console.log(sum);

// -------------------------------------------------------------------------------------------------

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Enter array elements: ', (answer) => {
//     console.log(`Array elements: ${answer}`);
    
//     let array = answer.split(" ");
//     console.log("Your array: ", array);
    
//     let sum = 0;
//     array.forEach((i) => {sum += parseInt(i)});
//     console.log(`Sum of array elements: ${sum}`)

//     rl.close()
//     });

// ---------------------------------------------------------------------------------------------------


// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Type your text: ', (answer) => {
//     console.log(`Text: ${answer}`);

//     console.log("Uppercase letters: ", answer.toUpperCase())

//     rl.close()
// });


// ---------------------------------------------------------------------------------------------------


// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question('Type your text: ', (answer) => {
//     console.log("Reversed text: ", answer)

//     rl.close()
// });


// ------------------------------------------------7.19---------------------------------------------------


// const fs = require('fs');

// // fs.writeFileSync("text.txt", "text");
// fs.appendFileSync("text.txt", "appended\n");


// --------------------------------------------------------------------------------------------------


// const http = require('http');

// http.createServer( (req, res) => {
//     res.write("Hello Hello");
//     res.end();
// }).listen(8080);

// console.log("Server is running: http://127.0.0.1:8080/")


// --------------------------------------------------------------------------------------------------

// let fs = require('fs');
// let http = require('http');
// let url = require('url');


// http.createServer(function (req, res) {
//     res.writeHead(200, {"Content-Type": "text/html"});  
//     if(req.url == "/profile.html"){
//         res.write('profile.html');
//     }
//     else{
//         res.writeHead(404, {"Content-Type": "text/html"})
//         res.write("404.html")
//     }
//     res.end()
// }).listen(8080)

// console.log("Server is running: http://127.0.0.1:8080/")

// ----------------------------------------------------------------------------------------

// const { readFileSync } = require("fs");
// var http = require("http");
// http
//   .createServer(function (request, response) {
    
//     if (request.url == "/profile.html") {
//       response.writeHead(200, { "Content-Type": "text/html" });
//       response.write("profile.html");
//     } else {
//       response.writeHead(404, { "Content-Type": "text/html" });
//       response.write("index.html");
//     }
//     response.end();
//   })
//   .listen(8080);
// console.log("Server running at http://127.0.0.1:8080/");


// ----------------------------------------------------------------------------------------

// const http = require('http');
// const url  = require('url');
// const fs   = require('fs');

// http.createServer((req, res) => {
//    let q = url.parse(req.url, true);
//    let filename = "." + q.pathname;
//    fs.readFile(filename, (req, err, data) => {
//       if (req) {
//          res.writeHead(200, {'Content-Type': 'text/html'});
//          return res.end('Check my <a href="profile.html">pro</a>' );
//       }
//       if (err) {
//          res.writeHead(404, {'Content-Type': 'text/html'});
//          return err.end();
//       }
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       res.write(data);
//       return res.end();
//    });
// }).listen(8080) 

// console.log(`Server is running at 127.0.0.1:8080/`);

// -----------------------------------------------------------


