import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRouter from "./router/auth.routes.js";
import messageRouter from "./router/message.routes.js";
import connectToDatabase from "./db/connectToDatabase.js";
import gobalErrorHandler from "./controllers/error.controllers.js";

const app = express();
const port = process.env.PORT || 8000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/messages", messageRouter);

app.use(gobalErrorHandler);

app.listen(port, () => {
  connectToDatabase();
  console.log(`server running on Port ${port}`);
});
