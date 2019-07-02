import { NextFunction, Response } from 'express';
import { IAppRequest } from '../util/app-request.interface';
import { BaseRouter } from './base.router';
export declare class UserRouter extends BaseRouter {
    /**
     * Default Constructor
     * @param prefix The String Prefix for this route.
     */
    constructor(prefix: string);
    getAll(req: IAppRequest, res: Response, next: NextFunction): Promise<void>;
    /**
     * Build the routes for this router.
     */
    buildRoutes(): import("express").Router;
}
//# sourceMappingURL=user.router.d.ts.map