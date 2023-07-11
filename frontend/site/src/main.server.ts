import { enableProdMode } from '@angular/core';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export { BootstrapServerModule } from './modules/bootstrap-server/bootstrap.server.module';
export { renderModule, renderModuleFactory } from '@angular/platform-server';
