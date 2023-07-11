import getCharacters from "./getCharacters.js";
import utils from "../utils/index.js";

export default {
    getCharacters: utils.catchedAsync(getCharacters)
}