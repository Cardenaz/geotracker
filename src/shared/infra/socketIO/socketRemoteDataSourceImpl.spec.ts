import { createServer } from "http";
import { Server } from "socket.io";
import { SocketIORemoteDataSourceImpl } from "./socketRemoteDataSource";

describe("", () => {

    let remoteSource : SocketIORemoteDataSourceImpl; 
    let server: any; 

    beforeAll(() => {
        remoteSource = new SocketIORemoteDataSourceImpl(); 
        server = createServer(); 
    })


    it("can be created", () => {

        remoteSource.createSocketServer(server); 

        expect(remoteSource.ioServer).toBeDefined(); 
    
    }); 

}); 