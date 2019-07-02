"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * A placeholder generic middleware class
 */
class GenericMiddleware {
    /**
     * Simply checks if a username query param exists--if so, sets it on request and response objects for later usage.
     */
    static async parseUsername(req, res, next) {
        try {
            // Check the request queryParams for a username property and set it if it exists---
            if (req.query.username) {
                req.username = req.query.username;
                res.locals.username = req.username;
            }
            next();
        }
        catch (error) {
            next(error);
        }
    }
}
exports.GenericMiddleware = GenericMiddleware;
//# sourceMappingURL=generic-middleware.js.map