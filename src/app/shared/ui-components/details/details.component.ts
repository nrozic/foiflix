import { Component, OnInit, Input } from '@angular/core'
import { IMovie } from '@src/app/shared/models/Movie.model'

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
    @Input() movie: IMovie

    constructor() {}

    ngOnInit() {}

    shouldDisplayComma(index: number): boolean {
        return index < this.movie.genres.length - 1 ? true : false
    }
}
