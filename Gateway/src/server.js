const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

const server = express();
server.set("port", 6005);

server.use(express.json());
server.use(morgan("dev"));

server.get("/", (req, res) => {
  res.status(200).send("Pagina Inicial");
});

server.use(
  "/characters",
  createProxyMiddleware({
    target: "http://localhost:6001",
    changeOrigin: true,
  })
);

server.use(
  "/films",
  createProxyMiddleware({
    target: "http://localhost:6002",
    changeOrigin: true,
  })
);

server.use(
  "/planets",
  createProxyMiddleware({
    target: "http://localhost:6003",
    changeOrigin: true,
  })
);

server.use((err, req, res, next) => {
  console.log(err.message);
  res.status(500).json({ error: err, mesagge: err.message });
});

module.exports = server;
