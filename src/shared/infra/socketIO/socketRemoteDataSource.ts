import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export interface SocketRemoteDataSource {
    createSocketServer(httpServer: Server) : any; 
}
export class SocketIORemoteDataSourceImpl implements SocketRemoteDataSource {
   public ioServer: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>; 
    public createSocketServer(httpServer: any) {
        this.ioServer = new Server(httpServer)
        return; 
    }

    onConnection() : void {
       this.ioServer.on("connection", (socket) => {

        console.log("User connected"); 

        }); 

    }

}