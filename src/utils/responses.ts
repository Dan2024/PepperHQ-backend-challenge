import { Response } from 'express';

const STATUS_MESSAGES = {
  200: 'success',
  201: 'success',
  400: 'fail',
  401: 'fail',
  403: 'fail',
  404: 'fail',
  500: 'error',
};

export function sendDataResponse(res: Response, statusCode: number, payload: object) {
  return res.status(statusCode).json({
    // @ts-expect-error
    status: STATUS_MESSAGES[statusCode],
    data: payload,
  });
}

export function sendMessageResponse(res: Response, statusCode: number, message: string) {
  return res.status(statusCode).json({
    // @ts-expect-error
    status: STATUS_MESSAGES[statusCode],
    message,
  });
}
