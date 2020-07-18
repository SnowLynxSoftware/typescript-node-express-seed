"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRouter = void 0;
const express_1 = require("express");
/**
 * Defines properties that all routes should have.
 */
class BaseRouter {
    /**
     * Default Constructor
     * @param prefix the string prefix for this route.
     */
    constructor(prefix) {
        this.router = express_1.Router();
        this.routePrefix = prefix;
    }
    /**
     * This will be overriden in the implementing class.
     */
    buildRoutes() {
        return;
    }
}
exports.BaseRouter = BaseRouter;
//# sourceMappingURL=base.router.js.map