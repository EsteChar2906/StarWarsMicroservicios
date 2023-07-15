import utils from "../utils/index.js";
import data from "../data/index.js";

const getFilmId = async (req, res) => {
  const { id } = req.params;
  const film = await data.byId(id);
  utils.response(res, 200, film);
};

export default getFilmId;
