import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core'

import { IMovie } from '@src/app/shared/models/Movie.model'

@Component({
    selector: 'app-poster-list',
    templateUrl: './poster-list.component.html',
    styleUrls: ['./poster-list.component.scss'],
})
export class PosterListComponent implements OnInit {
    @Input() movies: IMovie[]
    @Output() posterClick = new EventEmitter<IMovie>()

    constructor() {}

    get shouldDisplayMovies(): boolean {
        return this.movies && this.movies.length > 0 ? true : false
    }

    ngOnInit() {}

    onClick(event: MouseEvent, movie: IMovie) {
        this.posterClick.emit(movie)
    }
}
