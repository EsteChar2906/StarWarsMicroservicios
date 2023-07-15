const server = require("./src/server");

server.listen(server.get("port"), () => {
  console.log(`Gateway listening on port ${server.get("port")}`);
});
