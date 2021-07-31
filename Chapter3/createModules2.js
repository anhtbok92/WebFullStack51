var http = require('http');
var createModules = require('./createModules');

// console.log('======= Module duoc import =======');
// console.log(createModules);
//
// console.log('======= Module hien tai =======');
// console.log(module);

http.createServer(function (request, response) {
    console.log('Server dang lang nghe tren cong 8080');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write('Thoi gian hien tai la: ' + createModules.getMyDateTime() + '<br />');
    response.write('Duong dan file con: ' + createModules.getDirName() + '<br />');
    response.write('Tuoi : ' + createModules.myAge + '<br />');
    response.end('Hello World')
}).listen(8080);