import { Application } from 'express';
import { IRouter } from './router.interface';
import { UserRouter } from './user.router';

/**
 * Manages the creation and binding of routes for the API.
 */
export class RouterFactory {

   /**
    * Build all routes for all routers.
    * @param app Reference to the active express application.
    * @param config Reference to the configuration object.
    */
   public static initializeRoutes(app: Application): void {

      // Initialize all routers in an array.
      const routes: IRouter[] = [
         new UserRouter('/users')
      ];

      // Loop through the array and build our routes.
      for (const route of routes) {
         app.use(`/api${route.routePrefix}`, route.buildRoutes());
      }
   }

}
