const strore = require("../database");

module.exports = async (req, res) => {
  const { model } = req.params;
  const result = await strore[model].list();

  if (result) res.status(200).json(result);
  else
    throw new ClientError(
      `No se encontro ningun dato para el schema ${model}`,
      500
    );
};
