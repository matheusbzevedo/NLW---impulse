import 'dotenv/config';
import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

import routes from './routes';


const app = express();

app.use(cors());

const port = process.env.PORT|| 4000,
  serverHttp = http.createServer(app),
  io = new Server(serverHttp, {
    cors: {
      origin: '*'
    }
  });

io.on('connection', socket => {
  console.log(`Usuário conectado no scoket ${socket.id}`);
});

app
.use(express.json())
.use(routes);

export { serverHttp, io };
