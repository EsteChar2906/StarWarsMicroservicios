const store = require("../database");
const { ClientError } = require("../utils");
module.exports = async (req, res) => {
  const { id, model } = req.params;
  const result = await store[model].getId(id);

  if (result) {
    res.status(200).json(result);
  } else {
    throw new ClientError(
      `No se encontro datos con el Id ingresado para el schema ${model}`,
      401
    );
  }
};
