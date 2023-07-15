import utils from "../utils/index.js";

export default (req, res, next) => {
  const data = req.body;
  if (Object.entries(data).length > 0) return next();
  else
    throw new utils.ClientError(
      "Se requiren datos para crear la Pelicula",
      401
    );
};
