// db.js

const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
        });
        console.log('Database connected');
    } catch (error) {
        console.error(`Error connecting to DB: ${error.message}`);
    }
};

module.exports = connectDB;
