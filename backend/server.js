import path from "path";
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRouter from "./router/auth.routes.js";
import messageRouter from "./router/message.routes.js";
import userRouter from "./router/user.routes.js";

import connectToDatabase from "./db/connectToDatabase.js";
import gobalErrorHandler from "./controllers/error.controllers.js";

import { app, server } from "./socket/socket.js"; 

dotenv.config(); 

const port = process.env.PORT || 8000;


app.use(express.json());
app.use(cookieParser());


app.use("/api/v1/auth", authRouter);
app.use("/api/v1/messages", messageRouter);
app.use("/api/v1/users", userRouter);


app.use(gobalErrorHandler);


server.listen(port, () => {
  connectToDatabase();  
  console.log(`Server running on Port ${port}`);
});
