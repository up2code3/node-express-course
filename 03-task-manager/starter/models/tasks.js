const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"must provide name yo"],
        trim:true,
        maxLength:[20, "no longer than 20 letters"]
    }, 
    completed:{
        type:Boolean,
        // default:false
    },
})

module.exports = mongoose.model('task', TaskSchema)