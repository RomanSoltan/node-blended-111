import { HttpError } from 'http-errors';

export const errorHandler = (err, req, res, next) => {
  console.log('errorHandler:', err);

  if (err instanceof HttpError) {
    res.status(err.status).json({
      status: err.status,
      message: err.message,
    });
    return;
  }

  res.status(500).json({
    status: 500,
    message: 'Something went wrong',
    data: err.message,
  });
};
