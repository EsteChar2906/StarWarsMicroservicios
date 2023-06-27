import server from './src/server.js';

server.listen(server.get('port'), () => {
  console.log(`Server listening on port ${server.get('port')}`);
});

