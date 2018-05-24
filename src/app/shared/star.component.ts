import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'team-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})


export class StarComponent implements OnChanges {
    
    @Input() trophy: number;
    @Input() team: string;
    starWidth: number;
    @Output() trophyClicked: EventEmitter<number> = new EventEmitter<number>();
    @Output() teamClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.trophy;
    } 

    onClick(): void {
        this.trophyClicked.emit(this.trophy);
        this.teamClicked.emit(this.team);
    }

}