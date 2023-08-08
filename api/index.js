import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const connect = () => {
    mongoose
        .connect(process.env.MONGO)
        .then(() => {
            console.log("Connected to DB.");
        })
        .catch((err) => {
            throw err;
        })
}

//middlewares
app.use(cookieParser());
app.use(express.json());

//routes

//error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong";

    return res.status(status).json({
        success: false,
        status,
        message,
    })
})

app.listen(8800, () => {
    connect();
    console.log("Connected to Server");
})