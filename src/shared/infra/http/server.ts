import { createServer } from "http";
import { Server } from "socket.io";
import { app } from "./app";

const port = process.env.PORT || 3000; 

const httpServer = createServer(app); 

const io = new Server(httpServer, {
    // ...
  });
io.on('connection', (socket) => {
  console.log('User connected'); 

  socket.on("position-change", (data) => {
    console.log(data); 
    io.emit("position-change", data); 
  }); 
  socket.on('disconnect', () => {
    console.log("User disconnected"); 
  }
  ); 
}); 




httpServer.listen(port, () => {
  console.log(`Listening on ${port}`)
});


