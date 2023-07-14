const express = require("express");
const morgan = require("morgan");
const {
  createProxyMiddleware,
  fixRequestBody,
} = require("http-proxy-middleware");
const { PORT, CHARACTERS, FILMS, PLANETS } = require("./config/env.js");

const server = express();
server.set("port", PORT);

server.use(express.json());
server.use(morgan("dev"));

server.get("/", (req, res) => {
  res.status(200).send("Pagina Inicial");
});

server.use(
  "/characters",
  createProxyMiddleware({
    target: CHARACTERS,
    changeOrigin: true,
    onProxyReq: fixRequestBody,
  })
);

server.use(
  "/films",
  createProxyMiddleware({
    target: FILMS,
    changeOrigin: true,
    onProxyReq: fixRequestBody,
  })
);

server.use(
  "/planets",
  createProxyMiddleware({
    target: PLANETS,
    changeOrigin: true,
    onProxyReq: fixRequestBody,
  })
);

server.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).json({ error: err, mesagge: err.message });
});

module.exports = server;
