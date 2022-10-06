import { Request, Response } from 'express';
import { sendDataResponse, sendMessageResponse } from '../utils/responses';
import { getMenuFromAPI } from '../helper/getMenuFromAPI';

export const getMenu = async (_: Request, res: Response) => {
  try {
    const menu = await getMenuFromAPI();

    return sendDataResponse(res, 200, menu);
  } catch (e) {
    return sendMessageResponse(res, 500, 'Unable to get menu');
  }
};
