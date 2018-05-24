import { Injectable } from "@angular/core";
import { ITeam } from "./team";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable} from 'rxjs';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/operator/do';


@Injectable()
export class TeamsService {
    private _teamUrl = '.api/teams/teams.json';
    constructor(private _http: HttpClient) {}
    getTeams(): Observable<ITeam[]> {
        return this._http.get<ITeam[]>(this._teamUrl);//.do(data => console.log('All: '+ JSON.stringify(data))).catch(this.handleError);
    }

    // private handleError(err: HttpErrorResponse) {
    //     console.log(err.message);
    //     return Observable.throw(err.message);
    // }
    // getTeams(): ITeam[] {
    //     return [
    //         {
    //             "teamName": "Eagles",
    //             "city": "Philadelphia",
    //             "superBowls" : "1",
    //             "logo" : "https://upload.wikimedia.org/wikipedia/en/8/8e/Philadelphia_Eagles_logo.svg",
    //             "teamRanking" : 'Good'
    //         },
    //         {
    //             "teamName": "Cowboys",
    //             "city": "Dallas",
    //             "superBowls" : "5",
    //             "logo" : "https://upload.wikimedia.org/wikipedia/commons/1/15/Dallas_Cowboys.svg",
    //             "teamRanking" : "bad"
    //         },
    //         {
    //             "teamName": "Giants",
    //             "city": "New York",
    //             "superBowls" : "4",
    //             "logo" : "https://upload.wikimedia.org/wikipedia/commons/6/60/New_York_Giants_logo.svg",
    //             "teamRanking" : "bad"
    //         },
    //         {
    //             "teamName": "Redskins",
    //             "city": "Washington",
    //             "superBowls" : "3",
    //             "logo" : "https://upload.wikimedia.org/wikipedia/en/6/63/Washington_Redskins_logo.svg",
    //             "teamRanking" : "bad"
    //         }
    //     ];

    // }
}