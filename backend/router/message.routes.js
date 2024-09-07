import express from "express";
import { sendMessage } from "../controllers/message.controllers.js";
import { protect } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/send/:id", protect, sendMessage);

export default router;
