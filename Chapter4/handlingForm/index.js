const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parsing to json
app.use(bodyParser.json());

// paring application/x-www-form
app.use(bodyParser.urlencoded({ extended: true }));
app.set('views', './views'); // quy định file giao diện sẽ được sử dụng
app.set('view engine', 'pug'); // quy định template engine là pug
app.get('/', (req, res) => {
    res.render('form')
});

app.post('/user-info', (req, res) => {
    const { body } = req;
    console.log(body);
    res.render("user", { body });
});
app.listen(3003);