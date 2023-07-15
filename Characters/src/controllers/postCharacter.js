import utils from "../utils/index.js";
import data from "../data/index.js";

const postCharacter = async (req, res) => {
  const newCharacter = req.body;
  const character = await data.assert(newCharacter);
  utils.response(res, 200, character);
};

export default postCharacter;
