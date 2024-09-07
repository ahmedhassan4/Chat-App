import Converstaion from "../models/conversation.model.js";
import catchAsync from "../utils/catchAsync.js";

export const sendMessage = catchAsync(async (req, res, next) => {
  const { message } = req.body;
  const { id: receiverId } = req.params;
  const senderId = req.user._id;

  // let conversation = await Converstaion.findOne({
  //   participants: { $all: [senderId, receiverId] },
  // });

  // if (!conversation) {
  //   conversation = await Converstaion.create({
  //     participants: [senderId, receiverId],
  //   });
  // }

  console.log("hiii");
});
