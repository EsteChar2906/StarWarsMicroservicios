import utils from '../utils/index.js';
import data from '../data/index.js';

const getcharacters = async (req, res) => {
  const characters = await data.characters(); 
  utils.response(res, 200, characters);
};

export default getcharacters;
