import getPlanets from "./getPlanets.js";
import getPlanetId from "./getPlanetId.js";
import postPlanet from "./postPlanet.js";
import utils from "../utils/index.js";

export default {
  getPlanets: utils.catchedAsync(getPlanets),
  getPlanetId: utils.catchedAsync(getPlanetId),
  postPlanet: utils.catchedAsync(postPlanet),
};
