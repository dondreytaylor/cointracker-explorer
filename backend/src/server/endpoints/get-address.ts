/**
 *
 * HTTP Framework
 *
 */
import * as Hapi from '@hapi/hapi';

// Fetch 
import fetch from 'node-fetch'; 

/**
 *
 * Endpoint definition
 *
 */
let Endpoint: Hapi.ServerRoute =  {
    method: "GET",
    path: "/v1/bitcoin/address",
    handler: async (request, h) => {
        let addr:string = request.query.addr != undefined ? request.query.addr : ""; 
        let response =  await fetch(`${process.env.BLOCKCHAIN_API_BASE_ADDR}/${addr}`);
        return response.json()
    }

};


// Export endpoint to Hapi
export default Endpoint;