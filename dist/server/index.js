"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const config_factory_1 = require("./config/config.factory");
const routes_1 = require("./routes");
const server_factory_1 = require("./server.factory");
class ServerApp {
    /**
     * Starts the server application.
     */
    static async start() {
        // If we are running in development mode--load the environment variables config file.
        if (process.env.NODE_ENV === 'development') {
            dotenv_1.config();
        }
        // Initialize the config object.
        ServerApp.config = config_factory_1.ConfigFactory.parse(process.env);
        // Initialize the server object.
        ServerApp.app = server_factory_1.ServerFactory.createServer();
        // Build routes
        routes_1.RouterFactory.initializeRoutes(ServerApp.app);
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
exports.ServerApp = ServerApp;
//# sourceMappingURL=index.js.map