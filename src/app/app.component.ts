import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  template: `<div>
               <ul class ='nav navbar-nav'>
                <li><a [routerLink]="['/teams']">Home</a></li>
               </ul>
                <title>{{title}}</title>
                  <router-outlet></router-outlet>
              </div>
              <div>
              </div>
              `,
  styleUrls: ['./app.component.css'],
})



export class AppComponent {
  title: string = "Very nice app";
}
