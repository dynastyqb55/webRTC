const express = require('express');
const authController = require('../controllers/auth/authController');
const Joi = require('joi');
const validator = require('express-joi-validation').createValidator({});
const router = express.Router();

const registerSchema = Joi.object({
    userName: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
})

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
})


router.post('/register', validator.body(registerSchema), authController.controllers.postRegister)

router.post('/login', validator.body(loginSchema), authController.controllers.postLogin)


module.exports = router;