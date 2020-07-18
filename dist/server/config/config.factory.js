"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigFactory = void 0;
/**
 * Handles parsing the environment variables into a strictly typed object.
 */
class ConfigFactory {
    /**
     * Parses an environment object of variables into a strongly typed object.
     * @param env The process.env object from NodeJS.
     */
    static parse(env) {
        return {
            appPort: env.PORT ? env.PORT : 9000,
            nodeEnvironment: env.NODE_ENV ? env.NODE_ENV : 'development'
        };
    }
}
exports.ConfigFactory = ConfigFactory;
//# sourceMappingURL=config.factory.js.map