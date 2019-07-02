import { IAppConfig } from './app-config.interface';
/**
 * Handles parsing the environment variables into a strictly typed object.
 */
export declare class ConfigFactory {
    /**
     * Parses an environment object of variables into a strongly typed object.
     * @param env The process.env object from NodeJS.
     */
    static parse(env: any): IAppConfig;
}
//# sourceMappingURL=config.factory.d.ts.map