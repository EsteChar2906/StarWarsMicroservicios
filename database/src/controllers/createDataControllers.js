const { createResponse } = require("../utils");

module.exports = async (req, res) => {
  const result = await createResponse(req);

  res.status(200).json(result);
};
