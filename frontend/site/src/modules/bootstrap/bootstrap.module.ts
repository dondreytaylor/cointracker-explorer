import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SiteModule } from '../module-site/site.module';
import { SiteRoutingModule } from '../module-site/site-routing.module';
import { BootstrapComponent } from './components/bootstrap.component';
import { environment } from '../../environments/environment';


@NgModule({
  declarations: [
    BootstrapComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    SiteModule,
    SiteRoutingModule,

  ],
  exports: [],
  providers: [],
  bootstrap: [BootstrapComponent]
})

export class BootstrapModule { }