import { HttpException } from '../errors/http-exception.js';

export const errorHandler = (error, req, res, next) => {
  if (error instanceof HttpException) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.message,
    });
  }

  res.status(500).json({
    success: false,
    message: 'Internal Server Error',
  });
};
