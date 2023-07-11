// Core modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Components
import { LayoutComponents } from './layouts/layouts.components';
import { PageComponents } from './pages/pages.components';
import { SectionsComponents } from './sections/sections.components';
import { ElementsComponents } from './elements/elements.components';

// Directives
import { DirectivesList } from './directives/directives';

// Internal imports
import { SharedModule } from '../module-shared/shared.module';
import { SiteRoutingModule } from './site-routing.module';


@NgModule({
  declarations: [
    LayoutComponents,
    PageComponents,
    DirectivesList,
    SectionsComponents,
    ElementsComponents,
  ],
  imports: [BrowserModule, SiteRoutingModule, SharedModule],
  exports: [ElementsComponents],
  providers: [],
})
export class SiteModule {}
