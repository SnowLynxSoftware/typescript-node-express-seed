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
                throw new Error('An error occured when attempting to start the server.');
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
    console.log('App is listening on port 9000...');
    app.server.on('error', (e: any) => {
        console.error('OH NO AN ERROR');
    });
};

initialize();
