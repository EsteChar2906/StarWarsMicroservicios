const strore = require("../database");

module.exports = async (req, res) => {
  const { model } = req.params;
  const result = await strore[model].list();
  res.status(200).json(result);
};
