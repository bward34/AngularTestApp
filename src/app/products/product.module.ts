import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductDetail } from './product-detial.component.component';
import { ConvertToDash } from '../shared/convert-to-dash.pipe';
import { StarComponent } from '../shared/star.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TeamsService } from './product.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'teams/:id', component: ProductDetail},
      {path: 'teams', component: ProductListComponent}])
  ],
  declarations: [
    ProductListComponent,
    ProductDetail,
    ConvertToDash,
    StarComponent
  ],
  providers: [TeamsService]
})
export class ProductModule { }
