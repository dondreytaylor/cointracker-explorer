
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';

import { BootstrapModule } from '../bootstrap/bootstrap.module';
import { BootstrapComponent } from '../bootstrap/components/bootstrap.component';

@NgModule({
  imports: [
    BootstrapModule,
    ServerModule,
  ],
  bootstrap: [BootstrapComponent],
})
export class BootstrapServerModule {}