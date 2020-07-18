import {
   NextFunction,
   Response
} from 'express';
import { IAppRequest } from '../util/app-request.interface';

/**
 * A placeholder generic middleware class
 */
export class GenericMiddleware {

   /**
    * Simply checks if a username query param exists--if so, sets it on request and response objects for later usage.
    */
   public static async parseUsername(req: IAppRequest, res: Response, next: NextFunction) {
      try {
         // Check the request queryParams for a username property and set it if it exists---
         if (req.query.username) {
            req.username = req.query.username as string;
            res.locals.username = req.username;
         }
         next();
      } catch (error) {
          next(error);
      }
  }

}
