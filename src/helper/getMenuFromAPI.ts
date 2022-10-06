import axios from 'axios';
import redisClient from '../utils/redisClient';
import titles from '../titles.json';
import Menu from '../models/menu';

export const getMenuFromAPI = async () => {
  const menuFromAPI = await axios.get('http://backend-challenge-pos.pepperhq.com/menu.json');

  const extendedMenu = new Menu(menuFromAPI.data.categories, titles);

  redisClient.set('menu', JSON.stringify(extendedMenu), 'EX', 86400);

  return extendedMenu;
};
