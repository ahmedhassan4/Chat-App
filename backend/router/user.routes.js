import express from "express";
import {
  deleteMe,
  getAllUsers,
  getUsersForSidebar,
  updateMe,
} from "../controllers/user.controllers.js";
import { protect } from "../middleware/protectRoute.js";

const router = express.Router();

router.get("/getUsers", getAllUsers);

router.patch("/updateMe", protect, updateMe);
router.delete("/deleteMe", protect, deleteMe);

router.get("/getUsersSidebar", protect, getUsersForSidebar);

export default router;
