import {
   NextFunction,
   Response
} from 'express';
import { UserManager } from '../managers/user.manager';
import { GenericMiddleware } from '../middleware/generic-middleware';
import { IAppRequest } from '../util/app-request.interface';
import { BaseRouter } from './base.router';

export class UserRouter extends BaseRouter {

   /**
    * Default Constructor
    * @param prefix The String Prefix for this route.
    */
    constructor(prefix: string) {
        super(prefix);
        this.buildRoutes();
    }

    public async getAll(req: IAppRequest, res: Response, next: NextFunction) {
        try {
            // Get the requesting username
            const username: string = req.username;
            // Only allow continue if a username was provided (to test error messages in routers)
            if (username) {
               const users: string[] = await UserManager.getAllUsernames();
               res.json(users);
            } else {
               throw new Error('Any username must be provided to get a list of other usernames!');
            }
        } catch (error) {
            next(error);
        }
    }

    /**
     * Build the routes for this router.
     */
    public buildRoutes() {
        this.router.get('/', (GenericMiddleware.parseUsername as any), (this.getAll.bind(this) as any));
        return this.router;
    }
}
