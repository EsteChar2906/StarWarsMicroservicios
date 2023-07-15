const store = require("../database");
const ClientError = require("./errors");
module.exports = async (req) => {
  const { model } = req.params;
  const data = req.body;
  const { _id } = data;

  const verify = await store[model].getId(_id);

  if (!verify) {
    const newData = await store[model].assert(data);

    const result = {
      error: false,
      data: newData,
    };

    return result;
  } else {
    throw new ClientError("El id ya existe", 404);
  }
};
