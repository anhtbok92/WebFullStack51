const express = require('express');
const app = express();
const mongoose = require('mongoose');
const CarModel = require('./model/car.model');

// connect to mongodb
const db = 'mongodb://localhost/car-example2';
const port = 3009;

mongoose.connect(db);

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
   res.send('api working');
});

app.get('/cars', (req, res) => {
    console.log(req.query.name);
    CarModel.find({ name: req.query.name }).exec((err, cars) => {
        if (err) {
            res.send('Khong the lay thong tin car')
        } else {
            console.log('Lay thanh cong cars');
            res.json(cars);
        }
    })
});

app.get('/car/:id', (req, res) => {
    CarModel.findOne({
        _id: req.params.id
    }).exec((err, car) => {
        if (err) {
            res.send('Co loi xay ra...');
        } else {
            console.log('get car by ID');
            res.json(car);
        }
    });
});

app.put('/car/:id', (req, res) => {
    CarModel.findOneAndUpdate({
        _id: req.params.id
    },
        { $set: { name: req.body.name }},
        { upsert: true },
        (err, car) => {
            if (err) {
                res.send('Xay ra loi update !!!');
            } else {
                // 1. find lai
                // 2. return thanh cong hay that bai
                res.send(200);
            }
        }
    )
})


app.post('/car', (req, res) => {
   var car = new CarModel();
   car.name = req.body.name;
   car.manufacturer = req.body.manufacturer;
   car.price = req.body.price;

   car.save((err, car) => {
       if (err) {
           res.send('Error luu thong tin car');
       } else {
           console.log('Luu thong tin car thanh cong', car);
           res.send(car);
       }
   });
});

app.listen(port, () => {
    console.log('app listening on port: ', port);
});