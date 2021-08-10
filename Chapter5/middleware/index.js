const express = require('express');
const app = express();

// Create a middleware for check request from client
var checkRequest = (req, res, next) => {
    // check ip, check data....
    if (req.url === '/admin') {
        res.send('Bạn không có quyền truy cập vào trang này');
    } else {
        next();
    }
}

// Using middleware
app.use(checkRequest);

// Init new router
app.get('/', function (req, res) {
    res.send('Truy cap homepage thành công')
});

app.get('/shopping-cart', function (req, res) {
    res.send('Truy cap gio hang thành công')
});

app.get('/admin', function (req, res) {
    res.send('Truy cap admin thành công');
});

app.listen(3009);