const express = require('express');
const Joi = require('joi');
const mangaRouter = express.Router();

// Danh sách các loại truyện tranh
const mangas = [
    { id: '1', name: 'Trinh tham 2' },
    { id: '2', name: 'Truyen ma 2' },
    { id: '3', name: 'Lang man 2' }
];

// handling manga
app.get('/', function (req, res) {
    res.send(mangas);
});
app.post('/', function (req, res) {
    const { error } = validateMangas(req.body);
    console.log(error);
    if (error) return res.status(400).send(error.details[0].message);
    const manga = {
        id: mangas.length + 1,
        name: req.body.name
    };
    mangas.push(manga);
    res.send(mangas);
});


function validateMangas(manga) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(manga);
}
app.put('/:id')
app.delete('/:id')
app.get('/:id')
module.exports = mangaRouter;