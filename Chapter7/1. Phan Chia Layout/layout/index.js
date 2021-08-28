const express = require('express');
const app = new express();
const ejs = require('ejs');
app.set('view engine', 'ejs');

// Register public folder
app.use(express.static('public'));

// Test page
app.listen(4000, () => {
    console.log('App starting success on port 4000 !!!');
});

app.get('/', (request, response) => {
   response.render('index');
});

app.get('/about', (request, response) => {
    response.render('about');
});

app.get('/contact', (request, response) => {
    response.render('contact');
});

app.get('/post', (request, response) => {
    response.render('post');
});