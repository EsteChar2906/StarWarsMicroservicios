const { server } = require("./src/server.js");

server.listen(server.get("port"), () => {
  console.log(
    `Database microservices running in the port ${server.get("port")}`
  );
});
