// Core modules
import { NgModule } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import * as services from './services/services.barrel';

// Internal imports
import { SharedPipesList } from './pipes/pipes';
import { SharedGuardsList } from './guards/guards';
import { SharedServicesList } from './services/services';
import { SharedElementsComponents } from './elements/elements.components';
import { SharedFooterComponents } from './footers/footers.components'
import { SharedSectionsComponents } from './sections/sections.components'
import { DirectivesList } from './directives/directives'
import { SharedHeaderComponents } from './headers/headers.components';

// External modules
import { DateAgoPipe } from './pipes/date-ago/date-ago.pipe';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxQRCodeModule } from '@techiediaries/ngx-qrcode';
import { ClipboardModule } from 'ngx-clipboard';


@NgModule({
  declarations: [
    DirectivesList,
    SharedPipesList,
    SharedElementsComponents,
    SharedFooterComponents,
    SharedSectionsComponents,
    SharedHeaderComponents,
    DateAgoPipe,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DragDropModule,
    NgxQRCodeModule,
    ClipboardModule,
    BrowserAnimationsModule,
  ],
  exports: [
    DirectivesList,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedPipesList,
    DragDropModule,
    BrowserAnimationsModule,
        
    SharedElementsComponents,
    SharedFooterComponents,
    SharedSectionsComponents,
    SharedHeaderComponents,
  ],
  providers: [
    CurrencyPipe,
    SharedGuardsList,
    SharedServicesList
  ]
})

export class SharedModule { }
