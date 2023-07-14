import utils from "../utils/index.js";
import data from "../data/index.js";

const getCharacterId = async (req, res) => {
  const { id } = req.params;
  const character = await data.byId(id);
  utils.response(res, 200, character);
};

export default getCharacterId;
