import server from "./src/server.js";

server.listen(server.get("port"), () => {
  console.log(`Planets microservices listening on port ${server.get("port")}`);
});
