const strore = require("../database");

module.exports = async (req, res) => {
  const { id, model } = req.params;
  const result = await store[model].getId(id);
  res.status(200).json(result);
};
