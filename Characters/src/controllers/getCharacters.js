import utils from "../utils/index.js";
import data from "../data/index.js";

const getCharacters = async (req, res) => {
  const characters = await data.list();
  utils.response(res, 200, characters);
};

export default getCharacters;
