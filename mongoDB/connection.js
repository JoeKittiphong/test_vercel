const mongoose = require("mongoose")
const {MONGO_URI} = require("dotenv").config().parsed

const connectMonogDB=async()=>{
    await mongoose.connect(MONGO_URI)
        .then(()=>{
            console.log("mongo is connected");
        })
        .catch(()=>{
            console.log("can not connect to mongo");
        })
}

module.exports = connectMonogDB