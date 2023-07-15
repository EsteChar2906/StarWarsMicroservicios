import server from "./src/server.js";

server.listen(server.get("port"), () => {
  console.log(`Films microservices listening on port ${server.get("port")}`);
});
