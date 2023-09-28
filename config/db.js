// import mongoose from 'mongoose'
const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connecte To  Mongodb Database ${conn.connection.host}`)
        
    } catch (error) {
        console.log(`Error in Mongodb ${error}`)
    }
};
module.exports = connectDB; 