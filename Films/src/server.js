import express from 'express';
import morgan from 'morgan';
import route from './routes/index.js';

const server = express();
server.set('port', 6002);

server.use(express.json());
server.use(morgan("dev"));

server.use(route);

export default server;