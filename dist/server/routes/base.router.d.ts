import { Router } from 'express';
import { IRouter } from './router.interface';
/**
 * Defines properties that all routes should have.
 */
export declare class BaseRouter implements IRouter {
    /**
     * All routes will have a reference to the express router--which during the initialization phase of the app--we will merge them all together.
     */
    router: Router;
    /**
     * Defines the prefix that this router will have.
     */
    routePrefix: string;
    /**
     * Default Constructor
     * @param prefix the string prefix for this route.
     */
    constructor(prefix: string);
    /**
     * This will be overriden in the implementing class.
     */
    buildRoutes(): void;
}
//# sourceMappingURL=base.router.d.ts.map