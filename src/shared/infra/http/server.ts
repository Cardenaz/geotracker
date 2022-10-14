import { createServer } from "http";
import { Server, Socket } from "socket.io";
import { app } from "./app";

const port = process.env.PORT || 3000; 

const httpServer = createServer(app); 

const io = new Server(httpServer, {
    // ...
  });
io.on('connection', (socket) => {
  console.log('User connected'); 
}); 
httpServer.listen(port, () => {
  console.log(`Listening on ${port}`)
});


