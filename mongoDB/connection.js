const mongoose = require("mongoose")
require("dotenv").config()

const connectMonogDB=async()=>{
    await mongoose.connect(process.env.MONGO_URI)
        .then(()=>{
            console.log("mongo is connected");
        })
        .catch(()=>{
            console.log("can not connect to mongo");
        })
}

module.exports = connectMonogDB