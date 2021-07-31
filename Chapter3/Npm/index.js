// const express = require('express')
// const app = express()
//
// app.get('/', function (req, res) {
//     res.send('Hello World')
// })
//
// app.listen(3000)

const jsonexport = require('jsonexport');

const contacts = [{
    name: 'Bob',
    lastname: 'Smith'
},{
    name: 'James',
    lastname: 'David'
},{
    name: 'Robert',
    lastname: 'Miller'
},{
    name: 'David',
    lastname: 'Martin'
}];

jsonexport(contacts, function(err, csv){
    if (err) return console.error(err);

    // using javascript for download
    console.log(csv);
});