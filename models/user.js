const Validator = require('validator')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    firstname:String,
    lastname:String,
    email:{
        type:String,
        required:true,
        unique:true,
        validate : (value)=> Validator.default.isEmail(value)
    },
   
})

module.exports = mongoose.model('user',userSchema)