const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const authRoutes = require("./routes/auth");
const studyLogRouter = require("./routes/studyLogRouter");
const connectDB = require("./config/db");


dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/", authRoutes);
app.use("/", studyLogRouter);

const port = 5000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})