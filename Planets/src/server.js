import express from 'express';
import morgan from 'morgan';
import route from './routes/index.js';

const server = express();
server.set('port', 6003);

server.use(express.json());
server.use(morgan("dev"));

server.use(route);

server.use((err, req, res, next) => {
    res.status(err.statusCode || 500).json({error: true, message: err.message});
});

export default server;