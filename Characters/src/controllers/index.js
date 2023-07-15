import getCharacters from "./getCharacters.js";
import getCharacterId from "./getCharactersId.js";
import postCharacter from "./postCharacter.js";
import utils from "../utils/index.js";

export default {
  getCharacters: utils.catchedAsync(getCharacters),
  getCharacterId: utils.catchedAsync(getCharacterId),
  postCharacter: utils.catchedAsync(postCharacter),
};
