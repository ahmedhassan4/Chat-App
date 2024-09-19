export const sendResponse = (res, statusCode, token, data) => {
  res.status(statusCode).json({
      data,
  });
};
