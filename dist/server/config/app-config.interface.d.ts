/**
 * Defines the configuration options that the application can have set in a strictly typed object for easier use and referencing.
 */
export interface IAppConfig {
    /**
     * The port that the application is currently running on.
     */
    appPort: number;
    /**
     * The environment that node is currently running in. If not supplied--will default to 'development'.
     */
    nodeEnvironment: string;
}
//# sourceMappingURL=app-config.interface.d.ts.map