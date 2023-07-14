import utils from "../utils/index.js";
import data from "../data/index.js";

const postFilm = async (req, res) => {
  const newFilm = req.body;
  const film = await data.assert(newFilm);
  utils.response(res, 200, film);
};

export default postFilm;
