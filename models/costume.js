const mongoose = require("mongoose")
const costumeSchema = mongoose.Schema({
    costume_type:{type:String,maxLength:15}, 
    size: {type:String,maxLength:10},
    cost: {type:Number,min:0,max:20}
})

module.exports = mongoose.model("Costume",
    costumeSchema)