"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_manager_1 = require("../managers/user.manager");
const generic_middleware_1 = require("../middleware/generic-middleware");
const base_router_1 = require("./base.router");
class UserRouter extends base_router_1.BaseRouter {
    /**
     * Default Constructor
     * @param prefix The String Prefix for this route.
     */
    constructor(prefix) {
        super(prefix);
        this.buildRoutes();
    }
    async getAll(req, res, next) {
        try {
            // Get the requesting username
            const username = req.username;
            // Only allow continue if a username was provided (to test error messages in routers)
            if (username) {
                const users = await user_manager_1.UserManager.getAllUsernames();
                res.json(users);
            }
            else {
                throw new Error('Any username must be provided to get a list of other usernames!');
            }
        }
        catch (error) {
            next(error);
        }
    }
    /**
     * Build the routes for this router.
     */
    buildRoutes() {
        this.router.get('/', generic_middleware_1.GenericMiddleware.parseUsername, this.getAll.bind(this));
        return this.router;
    }
}
exports.UserRouter = UserRouter;
//# sourceMappingURL=user.router.js.map