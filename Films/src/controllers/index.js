import getFilms from "./getFilms.js";
import getFilmId from "./getFilmId.js";
import postFilm from "./postFilm.js";
import utils from "../utils/index.js";

export default {
  getFilms: utils.catchedAsync(getFilms),
  getFilmId: utils.catchedAsync(getFilmId),
  postFilm: utils.catchedAsync(postFilm),
};
