import { Component } from '@angular/core';
import { TeamsService } from './products/product.service';

@Component({
  selector: 'app-root',
  template: '<div><title>{{title}}</title><h1><pm-products></pm-products><team-star></team-star></h1></div>',
  styleUrls: ['./app.component.css'],
  providers: [TeamsService]
})

export class AppComponent {
  title: string = "Very nice app";
}
