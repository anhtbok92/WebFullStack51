// show module info
console.log(module);

// build-in module
// + path module
var path = require('path');
var fileName = path.basename('/Users/TestPath/demo.js');
console.log(fileName);

// + os Module
var os = require('os');
console.log('Platform:', os.platform());
console.log('Architecture:', os.arch());

// + querystring path
var queryString = require('querystring');
var query = queryString.parse('search=oto&year=2018&model=Audi');
console.log(query);

// + http module
var http = require('http');
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('Hello World')
}).listen(8080);