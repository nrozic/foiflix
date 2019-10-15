import { Component, OnInit, HostListener } from '@angular/core'
import { Location } from '@angular/common'

import { TmdbService } from '../core'
import { IMovie } from '../shared/models/Movie.model'
import { ActivatedRoute } from '@angular/router'

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.scss'],
    moduleId: module.id,
})
export class MovieComponent implements OnInit {
    movie: IMovie

    @HostListener('document:keydown', ['$event'])
    onkeydown(ev: KeyboardEvent) {
        if (ev.key === 'Backspace') {
            this._location.back()
        }
    }

    constructor(private _tmdbService: TmdbService, private _activatedRoute: ActivatedRoute, private _location: Location) {}

    ngOnInit() {
        const movieId = this._activatedRoute.snapshot.paramMap.get('id')
        this._getMovieDetails(movieId)
    }

    private _getMovieDetails(id: number | string) {
        this._tmdbService.getMovie(id).subscribe(rsp => {
            this.movie = new IMovie(rsp)
            console.log('Movie details:', this.movie)
        })
    }
}
