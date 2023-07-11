import utils from "../utils/index.js";
import data from "../data/index.js";

const getPlanets = async (req, res) => {
  const planets = await data.planetsData();
  utils.response(res, 200, planets);
};

export default getPlanets;
