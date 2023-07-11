import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BootstrapModule } from './modules/bootstrap/bootstrap.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic()
  .bootstrapModule(BootstrapModule)
  .catch(err => console.error(err));
});
