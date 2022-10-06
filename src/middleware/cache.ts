import redisClient from '../utils/redisClient';
import { Request, Response, NextFunction } from 'express';
import { sendDataResponse } from '../utils/responses';

export const cache = async (req: Request, res: Response, next: NextFunction) => {
  const cacheEntryName = req.baseUrl.split('/')[1];

  let cachedEntry = await redisClient.get(cacheEntryName);

  if (cachedEntry) return sendDataResponse(res, 200, JSON.parse(cachedEntry));
  else next();
};
