import getPlanets from "./getPlanets.js";
import utils from "../utils/index.js";

export default {
  getPlanets: utils.catchedAsync(getPlanets),
};
