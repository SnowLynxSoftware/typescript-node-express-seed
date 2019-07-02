/**
 * EXAMPLE: Handles Users
 *
 * Managers should be static classes and methods that directly call your database methods and return data to the routers.
 *
 * Manager methods shouldn't have try/catch UNLESS necessary for a specific reason. We should try/catch in the router level and handle errors there.
 *
 * Manager methods shouldn't await the final return statement either unless necessary--and allow the invoking method in the router to handle the await there.
 */
export declare class UserManager {
    /**
     * Returns a basic list of user strings in an array after 1 second.
     */
    static getAllUsernames(): Promise<string[]>;
}
//# sourceMappingURL=user.manager.d.ts.map