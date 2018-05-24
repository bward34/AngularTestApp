import {Component, OnInit} from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ITeam } from './team';
import { TeamsService } from './product.service';

@Component({
    //removed becuase we no longer need becuase of routing
   // selector: 'pm-products',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
    pageTitle: string = "List of Super Bowl Champions";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
    errorMessage: string;
    //Getter setter for filtering list
    _listFilter: string;
    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredTeams= this.listFilter ? this.performFilter(this.listFilter) : this.teams;
    }
    filteredTeams: ITeam[];
    teams: ITeam[] = [];

    //Defines stuff for this particlar instance of the class
    constructor(private _teamService: TeamsService) {
        //this.listFilter = 'eagles';
    }
    onTrohpyClicked(message:string): void {
        this.pageTitle = 'Message ' + message;
    }
    performFilter(filterBy:string): ITeam[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.teams.filter((team: ITeam) =>
            team.teamName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }
    //Use this when implmenting on Init
    ngOnInit(): void {
        this.teams = this._teamService.getTeams();
        //HTTP WAY ******************************************
        // this._teamService.getTeams()
        // .subscribe(teams => {
        //             this.teams = teams;
        //             this.filteredTeams = this.teams;
        //    },
        //    error => this.errorMessage = <any> error);
        this.filteredTeams = this.teams; //had to move from constructor otherwise that will not load and it will be empty      
    }
}