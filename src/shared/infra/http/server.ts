import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { app } from "./app";

const port = process.env.PORT || 3000; 

const httpServer = createServer(app); 

const io = new Server(httpServer, {
    // ...
  });

httpServer.listen(port);
