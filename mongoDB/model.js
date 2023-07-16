const mongoose = require("mongoose")

const dbSchema = new mongoose.Schema({
    title : String,
    cover : String,
    content : String
},{
    timestamps : true
})
const blog = mongoose.model("blogs", dbSchema)
module.exports = blog