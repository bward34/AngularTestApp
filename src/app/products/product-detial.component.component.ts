import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {ITeam} from './team'

@Component({
  templateUrl: './product-detial.component.component.html',
  styleUrls: ['./product-detial.component.component.css']
})
export class ProductDetail implements OnInit {

  pageTitle: 'Team Detail';
  team: ITeam;

  constructor(private _route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this._route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.team = {
      "teamName": "Eagles",
      "city": "Philadelphia",
      "superBowls" : "1",
      "logo" : "https://upload.wikimedia.org/wikipedia/en/8/8e/Philadelphia_Eagles_logo.svg",
      "teamRanking" : "Good"
    }
  }

}
