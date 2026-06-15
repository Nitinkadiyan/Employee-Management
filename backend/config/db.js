const mongoose = require("mongoose");

const connectDB = async()=>{
    try{
        console.log(process.env.MONGO_URL);
        await mongoose.connect(process.env.MONGO_URL);
        console.log("database connected");
    }
    catch(error){
        console.log("Database Connection Error");
        console.log(error.message);
    }
}
module.exports = connectDB;