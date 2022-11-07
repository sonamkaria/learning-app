const mongoose = require('mongoose')

//This is our course schema
const courseSchema = new mongoose.Schema({
    Image: {type:String, required:true },
    Name:{type: String, required: true},
    Category:{type: String, required: true},
    Company:{type: String, required: true},
    Link:{type: String, required: true},
    Reviews:{type: String, required: true}
    
})

//This is where we define out model using the schema we created
const Course = mongoose.model("Course", courseSchema)

//this is how we send vars to other files
module.exports = Course