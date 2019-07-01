import { Application } from 'express';
import { Server } from 'http';
import { ServerFactory } from './server.factory';

export class ServerApp {

    /**
     * The Express Application Instance.
     */
    public static app: Application;

    /**
     * Starts the server application.
     */
    public static async start(): Promise<Server> {
        ServerApp.app = ServerFactory.createServer();
        return ServerApp.app.listen(9000);
    }

}
