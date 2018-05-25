import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list.component';
import { ProductDetail } from './product-detial.component.component';
import { ConvertToDash } from '../shared/convert-to-dash.pipe';
import { RouterModule } from '@angular/router';
import { TeamsService } from './product.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    RouterModule.forChild([
      {path: 'teams/:id', component: ProductDetail}]),
      SharedModule
  ],
  declarations: [
    ProductListComponent,
    ProductDetail,
    ConvertToDash
  ],
  providers: [TeamsService]
})
export class ProductModule { }
