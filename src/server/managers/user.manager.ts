/**
 * EXAMPLE: Handles Users
 *
 * Managers should be static classes and methods that directly call your database methods and return data to the routers.
 *
 * Manager methods shouldn't have try/catch UNLESS necessary for a specific reason. We should try/catch in the router level and handle errors there.
 * 
 * Manager methods shouldn't await the final return statement either unless necessary--and allow the invoking method in the router to handle the await there.
 */
export class UserManager {

   /**
    * Returns a basic list of user strings in an array after 1 second.
    */
   public static async getAllUsernames(): Promise<string[]> {
      return new Promise((resolve) => {
         // This is just a test method and I am faking an API call taking 1 second here for visualization of a real-world API.
         setTimeout(() => {
            resolve([
               'Alyx',
               'Bethany',
               'Christina',
               'Drew',
               'Erika',
               'Falon',
               'George'
            ]);
         }, 1000);
      });
   }

}
