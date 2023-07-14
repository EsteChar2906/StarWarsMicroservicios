import express from "express";
import morgan from "morgan";
import route from "./routes/index.js";
import config from "./config/env.js";

const server = express();
const { PORT } = config;

server.set("port", PORT);

server.use(express.json());
server.use(morgan("dev"));

server.use(route);

server.use((err, req, res, next) => {
  res.status(err.status || 500).json({ error: true, message: err.message });
});

export default server;
