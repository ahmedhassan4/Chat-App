import User from "../models/user.model.js";

export const createUser = async (userData) => {
  const profilePic = `https://ui-avatars.com/api/?name=${userData.username}`;

  const newUser = await User.create({
    fullName: userData.fullName,
    username: userData.username,
    email: userData.email,
    gender: userData.gender,
    profilePic,
    role: userData.role,
    password: userData.password,
    passwordConfirm: userData.passwordConfirm,
    passwordChangedAt: userData.passwordChangedAt,
  });
  return newUser;
};
