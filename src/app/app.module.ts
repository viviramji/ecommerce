import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';

import { DemoComponent } from './components/demo/demo.component';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BaseComponent } from './layouts/base/base.component';

import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    DemoComponent,
    PageNotFoundComponent,
    BaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
