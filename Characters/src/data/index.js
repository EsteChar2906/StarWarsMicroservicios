import utils from "../utils/index.js";

export default {
  list: async () => {
    const result = await utils.consultingDB("get");
    return result;
  },
  byId: async (id) => {
    const result = await utils.consultingDB("get", id);
    return result;
  },
  assert: async (newCharacter) => {
    const result = await utils.consultingDB("post", newCharacter);
    return result;
  },
};
