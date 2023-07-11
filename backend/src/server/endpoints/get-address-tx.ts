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
    path: "/v1/bitcoin/address/transactions",
    handler: async (request, h) => {

         // Excepts a address hash
        let addr:string = request.query.addr != undefined ? request.query.addr : ""; 

        // Pagination parameters
        let page:number = parseInt(request.query.page) || 1; 
        let pagesize:number = parseInt(request.query.pagesize) || 20;

        try { 

            // Make a request to retrieve address details using blockchain API
            let response =  await fetch(`${process.env.BLOCKCHAIN_API_BASE_ADDR}/${addr}/tx?page=${page}&pagesize=${pagesize}`);

            // For debugging purposes we'll output what the response status code/text is
            console.log(response.status, response.statusText);

            // We'll directly forward back the response we get from the API
            return await response.json()
        }
        catch (e) {
            return {}
        }
    }

};


// Export endpoint to Hapi
export default Endpoint;