"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ServerFactory = void 0;
const express_1 = __importDefault(require("express"));
/**
 * A generic factory that will be used to standardize how we create a new express server.
 */
class ServerFactory {
    /**
     * Creates a new express server application for use.
     */
    static createServer() {
        return express_1.default();
    }
}
exports.ServerFactory = ServerFactory;
//# sourceMappingURL=server.factory.js.map