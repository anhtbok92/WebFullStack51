const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const UserModel = require('../model/user.model');

function registerValidate(data) {
    const schema = Joi.object({
        name: Joi.string().min(4).required(),
        email: Joi.string().email().min(10).required(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
}
function loginValidate(data) {
    const schema = Joi.object({
        email: Joi.string().email().min(10).required(),
        password: Joi.string().min(6).required(),
    });
    return schema.validate(data);
}

/*
register new user
 */
router.post('/register', async function (req, res) {
    // 1. validation user info
    const { error } = registerValidate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // 2. check email exist in db
    const emailExists = await UserModel.findOne({ email: req.body.email });
    if (emailExists) return res.status(400).send('Email exists in database');

    // 3. bcryptjs for crypt password
    var salt = bcrypt.genSaltSync(10);
    var hashPassword = bcrypt.hashSync(req.body.password, salt);

    // 4. create new user.
    const newUser = new UserModel();
    newUser.name = req.body.name;
    newUser.email = req.body.email;
    newUser.password = hashPassword;

    // 5. return user for client
    try {
        const user = await newUser.save();
        res.send(user);
    } catch (error) {
        console.log('Has error !!!');
        res.status(400).send(error);
    }
});

/*
login with email, password and return token string for client
 */
router.post('/login', async function (req, res) {
    // 1. validate user
    const { error } = loginValidate(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // 2. check email of user exists in database
    const user = await UserModel.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email not found in database');

    // 3. check password in database
    const passwordLogin = await bcrypt.compareSync(req.body.password, user.password);
    if (!passwordLogin) res.status(400).send('Password incorrect');

    // 4. generated token string
    const token = jwt.sign({ id: user._id }, 'chuoibimatkhongtietlo');

    // 5. return token for user
    res.header('auth-token', token).send(token);
});

/*
create verify middleware
 */
const middlewareVerify = (req, res, next) => {
    const token = req.header('auth-token');
    console.log('Token from client: ', token);
    if (!token) return res.status(401).send('Forbidden !!!');
    try {
        // check token correct
        req.user = jwt.verify(token, 'chuoibimatkhongtietlo');
        next();
    } catch (e) {
        res.status(400).send('Token incorrect')
    }
}
/*
create router for client access with token
 */
router.get('/admin', middlewareVerify, function (req, res) {
    res.send('Hello world, you access with token OK !');
})
module.exports = router;