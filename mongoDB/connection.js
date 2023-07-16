const mongoose = require("mongoose")

MONGO_URI = "mongodb+srv://zylaah:zylaah@nextblogdb.awdgvxo.mongodb.net/?retryWrites=true&w=majority"
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