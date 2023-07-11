/**
 *
 * HTTP Framework
 *
 */
import * as Hapi from '@hapi/hapi';

// Endpoints to export
import * as EndpointGetTX from "./get-tx"; 
import * as EndpointGetAddr from "./get-address"; 

// We'll list all the endpoints we want to export in a single 
// array to make it easier to register them all at once.
let Endpoints:Hapi.ServerRoute[] = [
    EndpointGetTX.default as Hapi.ServerRoute,
    EndpointGetAddr.default as Hapi.ServerRoute,
];

// Export endpoints to Hapi
export default Endpoints;