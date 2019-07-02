import { Request } from 'express';
/**
 * Extends the basic express request so that way our middleware can populate custom typed fields for us.
 */
export interface IAppRequest extends Request {
    /**
     * The username of the requesting user.
     */
    username: string;
}
//# sourceMappingURL=app-request.interface.d.ts.map