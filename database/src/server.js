const express = require("express");
const morgan = require("morgan");

const server = express();

server.set("port", 6006);

server.use(express.json());
server.use(morgan("dev"));

server.use(require("./routes"));

module.exports = { server };
