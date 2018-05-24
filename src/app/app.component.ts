import { Component } from '@angular/core';
import { TeamsService } from './products/product.service';

@Component({
  selector: 'app-root',
  template: `<div>
               <ul class ='nav navbar-nav'>
                <li><a [routerLink]="['/teams']">Home</a></li>
               </ul>
                <title>{{title}}</title>
                  <router-outlet></router-outlet>
                  <h1><team-star></team-star></h1>
              </div>
              <div>
              </div>
              `,
  styleUrls: ['./app.component.css'],
  providers: [TeamsService]
})



export class AppComponent {
  title: string = "Very nice app";
}
