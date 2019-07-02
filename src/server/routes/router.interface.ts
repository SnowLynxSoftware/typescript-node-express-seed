/**
 * Defines properties that all routes should have.
 */
export interface IRouter {

   /**
    * Builds the routes inside of the router.
    */
   buildRoutes: () => any;

   /**
    * The prefix for the given route.
    */
   routePrefix: string;

}
