import { Component, OnInit, Input, HostListener } from '@angular/core'
import { TmdbService } from '@src/app/core/index'
import { IMovieResponse, IMovie } from '../../models/Movie.model'
import { Subscription } from 'rxjs'
import { Router } from '@angular/router'

@Component({
    selector: 'app-related',
    templateUrl: './related.component.html',
    styleUrls: ['./related.component.scss'],
})
export class RelatedComponent implements OnInit {
    @Input() movieId: number | string
    @Input() title: string
    movies: IMovie[]
    response: IMovieResponse
    private _subscriptions = new Subscription()

    @HostListener('document:keydown', ['$event'])
    onkeydown(ev: KeyboardEvent) {
        if (ev.key === '1' || ev.key === '2' || ev.key === '3' || ev.key === '4' || ev.key === '5') {
            const movie = this.movies[parseInt(ev.key, 10)]
            this.openMovieDetails(movie)
        }
    }

    constructor(private _tmdbService: TmdbService, private _router: Router) {}

    ngOnInit() {
        console.log('related for movie', this.movieId)
        this._fetchRelated()
    }

    openMovieDetails(item: IMovie) {
        this._router.navigate(['movie', item.id])
    }

    private _fetchRelated(): void {
        const subscription = this._tmdbService.getSimilarMovies(this.movieId).subscribe(rsp => {
            console.log('Similar movies', rsp)
            this.response = new IMovieResponse(rsp)
            this.movies = this.response.results.map(item => {
                return new IMovie(item)
            })
            this._subscriptions.add(subscription)
            this._subscriptions.unsubscribe()
        })
    }
}
