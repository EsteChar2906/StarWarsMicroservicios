import getFilms from "./getFilms.js";
import utils from "../utils/index.js";

export default {
    getFilms: utils.catchedAsync(getFilms)
}