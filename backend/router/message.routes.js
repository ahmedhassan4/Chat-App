import express from "express";
import {
  getMessages,
  sendMessage,
} from "../controllers/message.controllers.js";
import { protect } from "../middleware/protectRoute.js";

const router = express.Router();

router.post("/send/:id", protect, sendMessage);
router.get("/:id", protect, getMessages);

export default router;
