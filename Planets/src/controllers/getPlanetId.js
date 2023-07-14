import utils from "../utils/index.js";
import data from "../data/index.js";

const getPlanetId = async (req, res) => {
  const { id } = req.params;
  const planet = await data.byId(id);
  utils.response(res, 200, planet);
};

export default getPlanetId;
