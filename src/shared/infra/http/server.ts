import express from 'express';
import { createServer } from "http";
import { Server, Socket } from "socket.io";

const port = process.env.PORT || 3000; 

const app = express(); 
const httpServer = createServer(app); 

const io = new Server(httpServer, {
    // ...
  });

httpServer.listen(port);
