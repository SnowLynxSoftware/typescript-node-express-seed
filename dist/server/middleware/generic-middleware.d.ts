import { NextFunction, Response } from 'express';
import { IAppRequest } from '../util/app-request.interface';
/**
 * A placeholder generic middleware class
 */
export declare class GenericMiddleware {
    /**
     * Simply checks if a username query param exists--if so, sets it on request and response objects for later usage.
     */
    static parseUsername(req: IAppRequest, res: Response, next: NextFunction): Promise<void>;
}
//# sourceMappingURL=generic-middleware.d.ts.map