import { Router } from 'express';
import { IRouter } from './router.interface';

/**
 * Defines properties that all routes should have.
 */
export class BaseRouter implements IRouter {

   /**
    * All routes will have a reference to the express router--which during the initialization phase of the app--we will merge them all together.
    */
    public router: Router;

    /**
     * Defines the prefix that this router will have.
     */
    public routePrefix: string;

    /**
     * Default Constructor
     * @param prefix the string prefix for this route.
     */
    constructor(prefix: string) {
        this.router = Router();
        this.routePrefix = prefix;
    }

    /**
     * This will be overriden in the implementing class.
     */
    public buildRoutes(): void {
       return;
    }
}
