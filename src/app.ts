import { Server } from 'http';
import { ServerApp } from './server';

export class App {

    /**
     * A reference to the running server.
     */
    public server: any;

    /**
     * Default Constructor
     */
    constructor() {
        this.server = null;
    }

    /**
     * Initialize the application.
     */
    public async init(): Promise<void> {
        ServerApp.start()
        .then((srv: Server) => {
            if (srv) {
                this.server = srv;
            } else {
                throw new Error('An error occurred when attempting to start the server.');
            }
        })
        .catch((err) => {
            console.error(err);
            process.exit(1);
        });
    }
}

/**
 * Bootstrap the application here and handle any errors events gracefully.
 */
const initialize = async () => {
    const app = new App();
    await app.init();
    console.log('Platform: ' + process.platform + '-' + process.arch);
    console.log('Node: ' + process.version);
    console.log('Environment: ' + ServerApp.config.nodeEnvironment);
    console.log('Server is listening on port ' + ServerApp.config.appPort);
    app.server.on('error', () => {
        console.error('OH NO AN ERROR');
    });
};

/**
 * Start the server...
 */
initialize();
