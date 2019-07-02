import { IAppConfig } from './app-config.interface';

/**
 * Handles parsing the environment variables into a strictly typed object.
 */
export class ConfigFactory {

   /**
    * Parses an environment object of variables into a strongly typed object.
    * @param env The process.env object from NodeJS.
    */
   public static parse(env: any): IAppConfig {
      return {
         appPort: env.PORT ? env.PORT : 9000,
         nodeEnvironment: env.NODE_ENV ? env.NODE_ENV : 'development'
      };
   }

}
