const server = require("./src/server");

server.listen(server.get('port'), () => {
  console.log(`Server listening on port ${server.get('port')}`);
});
