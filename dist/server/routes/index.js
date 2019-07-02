"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_router_1 = require("./user.router");
/**
 * Manages the creation and binding of routes for the API.
 */
class RouterFactory {
    /**
     * Build all routes for all routers.
     * @param app Reference to the active express application.
     * @param config Reference to the configuration object.
     */
    static initializeRoutes(app) {
        // Initialize all routers in an array.
        const routes = [
            new user_router_1.UserRouter('/users')
        ];
        // Loop through the array and build our routes.
        for (const route of routes) {
            app.use(`/api${route.routePrefix}`, route.buildRoutes());
        }
    }
}
exports.RouterFactory = RouterFactory;
//# sourceMappingURL=index.js.map