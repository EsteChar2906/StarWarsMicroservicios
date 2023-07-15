const mongoose = require("mongoose");
const { MONGO_URL } = require("../config/env.js");

const conn = mongoose.createConnection(MONGO_URL);

module.exports = {
  Characters: conn.model("characters", require("./schema/characterSchema.js")),
  Films: conn.model("films", require("./schema/filmSchema.js")),
  Planets: conn.model("planets", require("./schema/planetSchema.js")),
};
