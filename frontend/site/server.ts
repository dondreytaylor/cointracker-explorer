import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';
import axios from 'axios';

import { BootstrapServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import { environment } from './src/environments/environment';

const expressStaticCompressed = require('express-static-gzip');

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {

  const server = express();
  const distFolder = join(process.cwd(), 'dist/browser');
  
  // dir name "dist_compressed" must match output dir name in `npm run compress` for gz compression to work
  const compressedDistFolder = join(process.cwd(), 'dist_compressed/browser');

  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  // Http Security Headers (Frame busting, Force HTTP, and CSP)
  server.use(function applyXFrame(req, res, next) {
      res.set('X-Frame-Options', 'DENY');
      res.set('X-XXS-Protection', '1; mode=block');
      res.set('X-Content-Type-Options', 'nosniff');
      res.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains')
      next();
  });

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: BootstrapServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', (req, res, next) => {
    const gzFile = join(compressedDistFolder, req.url + '.gz');
    if(existsSync(gzFile)) {
      return expressStaticCompressed(compressedDistFolder)(req, res, next);
    }
    return express.static(distFolder, {
      maxAge: '1y'
    })(req, res, next)
  });

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] });
  });

  return server;
}

function run(): void {
  
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
