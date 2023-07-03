const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true,
        minLength : 10,
        lowercase : true
    },
    userId : {
        type : String,
        required : true,
        unique : true
    },
    password: {
        type : String,
        required : true
    },
    userType : {
        type : String,
        required : true,
        default : 'CUSTOMER',
        enum : ['CUSTOMER','ADMIN']
    }
},{timestamps : true})

module.exports = mongoose.model("User", userSchema);