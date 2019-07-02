"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server");
class App {
    /**
     * Default Constructor
     */
    constructor() {
        this.server = null;
    }
    /**
     * Initialize the application.
     */
    async init() {
        server_1.ServerApp.start()
            .then((srv) => {
            if (srv) {
                this.server = srv;
            }
            else {
                throw new Error('An error occured when attempting to start the server.');
            }
        })
            .catch((err) => {
            console.error(err);
            process.exit(1);
        });
    }
}
exports.App = App;
/**
 * Bootstrap the application here and handle any errors events gracefully.
 */
const initialize = async () => {
    const app = new App();
    await app.init();
    console.log('Platform: ' + process.platform + '-' + process.arch);
    console.log('Node: ' + process.version);
    console.log('Environment: ' + server_1.ServerApp.config.nodeEnvironment);
    console.log('Server is listening on port ' + server_1.ServerApp.config.appPort);
    app.server.on('error', () => {
        console.error('OH NO AN ERROR');
    });
};
initialize();
//# sourceMappingURL=app.js.map