/// <reference types="node" />
import { Application } from 'express';
import { Server } from 'http';
import { IAppConfig } from './config/app-config.interface';
export declare class ServerApp {
    /**
     * The Express Application Instance.
     */
    static app: Application;
    /**
     * Application configuration options.
     */
    static config: IAppConfig;
    /**
     * Starts the server application.
     */
    static start(): Promise<Server>;
}
//# sourceMappingURL=index.d.ts.map