//Root App Module
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import {HttpClient, HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { ProductListComponent} from './products/product-list.component';
import { ConvertToDash} from './shared/convert-to-dash.pipe';
import { StarComponent} from './shared/star.component';
import { ProductDetail } from './products/product-detial.component.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToDash,
    StarComponent,
    ProductDetail,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'teams', component: ProductListComponent},
      {path: 'teams/:id', component: ProductDetail}])
  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
