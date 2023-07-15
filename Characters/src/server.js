import express from "express";
import morgan from "morgan";
import router from "./routes/index.js";
import config from "./config/env.js";
const server = express();

const { PORT } = config;
server.set("port", PORT);

server.use(express.json());
server.use(morgan("dev"));

server.use(router);

server.use((err, req, res, next) => {
  //console.log(err);
  res.status(err.status || 500).json({ error: true, message: err.message });
});

export default server;
