const mongoose = require("mongoose")
const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://Administrator:rcselk32i9@cluster0.um90oka.mongodb.net/appDataBase?retryWrites=true&w=majority")
        console.log("Success: Connected to MongoDB")
    } catch (err) {
        console.log("Failure: Unconnected to MongoDB")
        throw new Error()
    }
}

module.exports = connectDB