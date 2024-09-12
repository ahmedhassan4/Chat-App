import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import AppError from "../utils/appError.js";
import catchAsync from "../utils/catchAsync.js";

export const sendMessage = catchAsync(async (req, res, next) => {
  const { message } = req.body;
  const { id: receiverId } = req.params;
  const senderId = req.user._id;

  let conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  });

  if (!conversation) {
    conversation = await Conversation.create({
      participants: [senderId, receiverId],
    });
  }

  const newMessage = new Message({
    senderId,
    receiverId,
    message,
  });

  if (newMessage) {
    conversation.messages.push(newMessage._id);
  }

  //socket IO HERE!!
  await Promise.all([conversation.save(), newMessage.save()]);

  res.status(200).json({
    message: newMessage,
  });
});

export const getMessages = catchAsync(async (req, res, next) => {
  const { id: userToChatId } = req.params;
  const senderId = req.user._id;
  console.log("heiii");

  const conversation = await Conversation.findOne({
    participants: { $all: [userToChatId, senderId] },
  }).populate("messages");

  if (!conversation) {
    return next(new AppError("conversation not found !!"));
  }

  const messages = conversation.messages;

  res.status(200).json({
    status: "success",
    data: messages,
  });
});
