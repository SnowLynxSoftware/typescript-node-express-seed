import express from 'express';

/**
 * A generic factory that will be used to standardize how we create a new express server.
 */
export class ServerFactory {

    /**
     * Creates a new express server application for use.
     */
    public static createServer(): any {
        return express();
    }

}
