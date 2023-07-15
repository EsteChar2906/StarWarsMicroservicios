const express = require("express");
const morgan = require("morgan");
const { PORT } = require("./config/env.js");

const server = express();

server.set("port", PORT);

server.use(express.json());
server.use(morgan("dev"));

server.use(require("./routes"));

server.use((err, req, res, next) => {
  //console.log(err);
  res.status(err.status || 500).json({ error: true, message: err.message });
});

module.exports = { server };
