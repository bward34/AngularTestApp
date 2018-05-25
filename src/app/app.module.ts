//Root App Module
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { ProductListComponent} from './products/product-list.component';
import { ConvertToDash} from './shared/convert-to-dash.pipe';
import { StarComponent} from './shared/star.component';
import { ProductDetail } from './products/product-detial.component.component';
import { ProductModule} from './product/product.module'

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
