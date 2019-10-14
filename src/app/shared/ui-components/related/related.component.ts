import { Component, OnInit, Input } from '@angular/core'
import { TmdbService } from '@src/app/core/index'
import { IMovieResponse, IMovie } from '../../models/Movie.model'
import { Subscription } from 'rxjs'

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

    constructor(private _tmdbService: TmdbService) {}

    ngOnInit() {
        console.log('related for movie', this.movieId)
        this._fetchRelated()
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
