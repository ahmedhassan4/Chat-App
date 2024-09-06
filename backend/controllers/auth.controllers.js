import User from "../models/user.model.js";
import catchAsync from "../utils/catchAsync.js";
import jwt from "jsonwebtoken";
import { generateToken, setTokenInCookie } from "../utils/token.js";
import { createUser } from "../services/userService.js";
import { sendResponse } from "../utils/responseHandler.js";
import AppError from "../utils/appError.js";

export const signup = catchAsync(async (req, res, next) => {
  const newUser = await createUser(req.body);
  const token = generateToken(newUser._id);
  setTokenInCookie(token, res);
  sendResponse(res, 201, token, newUser);
});

export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(new AppError(`Please Provide Email and password`, 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError("Incorrect email or password", 401));
  }

  const token = generateToken(user._id);
  setTokenInCookie(token, res);
  sendResponse(res, 200, token, user);
});

export const logout = catchAsync(async (req, res) => {
  console.log("hello from logout");
});
