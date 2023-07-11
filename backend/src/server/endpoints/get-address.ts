/**
 *
 * HTTP Framework
 *
 */
import * as Hapi from '@hapi/hapi';


/**
 *
 * Endpoint definition
 *
 */
let Endpoint: Hapi.ServerRoute =  {
    method: "GET",
    path: "/v1/btc/address",
    handler: (request, h) => {
        return "Hello World!";
    }

};


// Export endpoint to Hapi
export default Endpoint;