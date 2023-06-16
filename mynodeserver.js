//you have to start and stop the node server and refresh the page
/*
var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('<strong><em>Hello World!</em></strong>');
}).listen(8080);
*/

/*
//with my own custom module
var http = require('http');
var dt = require('./mymod');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.end();
}).listen(8080);
*/

//Read the query string
//The function passed into the http.createServer() has a req argument that represents the request from the client, as an object (http.IncomingMessage object).

//This object has a property called "url" which holds the part of the url that comes after the domain name:
/*
var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end();
}).listen(8080);
*/



//split query string
/*
var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  var q = url.parse(req.url, true).query;
  var txt = q.month + "/" + q.year;
  res.end(txt);
}).listen(8080);
*/

/*
//create new file with open
var fs = require('fs');

fs.open('newfile.txt', 'w', function (err, file) {
  if (err) throw err;
  console.log('Saved!');
});
*/
/*

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  //Open a file on the server and return its content:
  fs.readFile('page.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);
*/

//writeFile to replace open in w mode to create and write 
//if it doesn't exist, it creates
//if it does exist, it overwrites
/*
var fs = require('fs');

fs.writeFile('newfile.txt', 'Hello content!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});

*/

/*
var fs = require('fs');

fs.appendFile('newfile.txt', ' This is my text.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});
*/
/*
var fs = require('fs');

fs.unlink('newfile.txt', function (err) {
  if (err) throw err;
  console.log('File deleted!');
});
*/
/*
var fs = require('fs');

fs.rename('newfile.txt', 'renamedfile.txt', function (err) {
  if (err) throw err;
  console.log('File Renamed!');
});
*/

/*
var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
var q = url.parse(adr, true);

console.log(q.host); //returns 'localhost:8080'
console.log(q.pathname); //returns '/default.htm'
console.log(q.search); //returns '?year=2017&month=february'

var qdata = q.query; //returns an object: { year: 2017, month: 'february' }
console.log(qdata.month); //returns 'february'
*/

//Every action on a computer is an event. Like when a connection is made or a file is opened.

//Objects in Node.js can fire events, like the readStream object fires events when opening and closing a file:

/*
var fs = require('fs');
var rs = fs.createReadStream('./demofile.txt');
rs.on('open', function () {
  console.log('The file is open');
});
*/
//connect to sql 
//https://www.w3schools.com/nodejs/nodejs_mysql.asp