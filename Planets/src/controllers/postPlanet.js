import utils from "../utils/index.js";
import data from "../data/index.js";

const postPlanet = async (req, res) => {
  const newPlanet = req.body;
  const planet = await data.assert(newPlanet);
  utils.response(res, 200, planet);
};

export default postPlanet;
