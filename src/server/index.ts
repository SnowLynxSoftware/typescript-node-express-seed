import { config } from 'dotenv';
import { Application } from 'express';
import { Server } from 'http';
import { IAppConfig } from './config/app-config.interface';
import { ConfigFactory } from './config/config.factory';
import { RouterFactory } from './routes';
import { ServerFactory } from './server.factory';

export class ServerApp {

    /**
     * The Express Application Instance.
     */
    public static app: Application;

    /**
     * Application configuration options.
     */
    public static config: IAppConfig;

    /**
     * Starts the server application.
     */
    public static async start(): Promise<Server> {
        // If we are running in development mode--load the environment variables config file.
        if (process.env.NODE_ENV === 'development') {
            config();
        }
        // Initialize the config object.
        ServerApp.config = ConfigFactory.parse(process.env);
        // Initialize the server object.
        ServerApp.app = ServerFactory.createServer();
        // Build routes
        RouterFactory.initializeRoutes(ServerApp.app);
        // Setup Cors
        ServerApp.app.use((_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
            res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST');
            res.header('Access-Control-Allow-Credentials', 'true');
            next();
        });

        // Start listening on the server.
        return ServerApp.app.listen(ServerApp.config.appPort);
    }

}
