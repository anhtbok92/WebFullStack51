const Joi = require('joi');
const express = require('express');

const app = express();

app.use(express.json());

// Danh sách các loại truyện tranh
const mangas = [
    { id: '1', name: 'Trinh tham' },
    { id: '2', name: 'Truyen ma' },
    { id: '3', name: 'Lang man' }
];

app.get('/api/manga', function (req, res) {
    res.send(mangas);
});

app.post('/api/manga', function (req, res) {
    const { error } = validateMangas(req.body);
    console.log(error);
    if (error) return res.status(400).send(error.details[0].message);
    const manga = {
        id: mangas.length + 1,
        name: req.body.name
    };
    mangas.push(manga);
    res.send(mangas);
    //
});

function validateMangas(manga) {
    const schema = Joi.object({
        name: Joi.string().min(3).required()
    });
    return schema.validate(manga);
}

app.listen(8080, () => console.log('Server dang lang nghe tren cong 8080'));
//
// app.put('');
//
// app.delete('');