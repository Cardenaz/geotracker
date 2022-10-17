import { createServer } from "http";
import { Server } from "socket.io";
import { TrackOrderDTO } from "../../core/TrackOrderDTO";
import { app } from "./app";

const port = process.env.PORT || 3000; 

const httpServer = createServer(app); 

const io = new Server(httpServer, {
    // ...
  });



io.on('connection', (socket) => {
  console.log('User connected', socket.id); 
  socket.on('track-order', (data: TrackOrderDTO) => {
    
  }); 

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


