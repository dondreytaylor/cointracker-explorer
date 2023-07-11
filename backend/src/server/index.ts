'use strict';

// Used to load variables from .env
import * as dotenv from 'dotenv';

// Load variables for .env
dotenv.config();

/**
 *
 * Used to reference package.json
 *
 */
import fs, { readFileSync } from 'fs';


/**
 *
 * HTTP Framework
 *
 */
import * as Hapi from '@hapi/hapi';
import { Server } from '@hapi/hapi';

/**
 *
 * Hapi Depends;
 *
 */
import Inert from '@hapi/inert';
import Vision from '@hapi/vision';

/**
 *
 * Load he contents of package.json into a variable we 
 * can reference later.
 *
 */
const Package = JSON.parse(readFileSync('package.json', 'utf-8'));


/**
 *
 * Endpoints to register
 *
 */
import Endpoints from "./endpoints/index";


/**
 *
 * Default endpoint. Can be used as health check.
 *
 */
let server: Server;

/**
 *
 * Initializes the Hapi server
 *
 * @returns Initialized Hapi Server reference
 *
 */
const initServer = async function (): Promise<Server> {

    // Create a Hapi Server
    server = Hapi.server({
        port: process.env.PORT || 8888,
        host: '0.0.0.0',
        routes: {
            cors: true
        }
    });

    // Register relevant plugins
    await server.register(Inert);
    await server.register(Vision);
    return server;
};

/**
 *
 * Registers routes and then starts the Hapi server
 *
 * @returns Promise denoting that server has been started
 *
 */
const startServer = async function (): Promise<void> {
    server.route(Endpoints as Hapi.ServerRoute[]);
    return server.start();
};

/**
 *
 * Catches any unhandled exceptions within the microservice
 *
 */
process.on('unhandledRejection', (err) => {
    console.error('unhandledRejection');
    console.error(err);
    process.exit(1);
});


/**
 *
 * HTTP Server object with function to initialize and start the Hapi Server
 *
 */
export const HTTPServer = {

    /**
     *
     * Initializes the Hapi server
     *
     * @returns None.
     *
     */
    init: async () => {

        // Initialize the Hapi server
        await initServer()

        // Start the Hapi Server
        await startServer()
        
        console.log(`Listening on ${server.settings.host}:${server.settings.port}`);
    },
};


// Start the HTTP Server
(async () => { 

    await HTTPServer.init();

})(); 