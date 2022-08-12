const joi = require('joi');

const userValidation = joi.object({
    task : joi.string().min(3).required(),
    due : joi.string().min(3).max(15).required(),
    status : joi.string().min(4).max(10).required() 
});

module.exports = userValidation;
