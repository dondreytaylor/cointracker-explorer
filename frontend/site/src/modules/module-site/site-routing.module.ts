import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import * as layouts from './layouts/layouts.barrel';
import * as pages from './pages/pages.barrel';

const routes: Routes = [
  {
    path: '',
    component: layouts.LayoutDefaultComponent,
    children: [{ path: '', component: pages.PageLandingComponent }],
  },
  {
    path: 'bitcoin',
    component: layouts.LayoutDefaultComponent,
    children: [
      { path: 'address', component: pages.PageAddressComponent },
      { path: 'transaction', component: pages.PageTransactionComponent }
    ],
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class SiteRoutingModule {}
