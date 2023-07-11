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
    path: "/v1/bitcoin/transaction",
    handler: async (request, h) => {
        let tx:string = request.query.tx != undefined ? request.query.tx : ""; 
        try { 
            let response = await fetch(`${process.env.BLOCKCHAIN_API_BASE_TX}/${tx}`);
            return await response.json()
        }
        catch (e) {
            return {}
        }
    }

};


// Export endpoint to Hapi
export default Endpoint;