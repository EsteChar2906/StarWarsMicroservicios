import utils from "../utils/index.js";
import data from "../data/index.js";

const getFilms = async (req, res) => {
  const films = await data.list();
  utils.response(res, 200, films);
};

export default getFilms;
