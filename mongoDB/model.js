const mongoose = require("mongoose")

const dbSchema = new mongoose.Schema({
    title : String,
    cover : String,
    content : String
})
const blog = mongoose.model("blogs", dbSchema)
module.exports = blog