import { Component, OnInit, ViewEncapsulation, OnDestroy } from '@angular/core'
import { TmdbService } from '../core'
import { Subscription } from 'rxjs'
import { IMovieResponse, IMovie } from '../shared/models/Movie.model'
import { Router } from '@angular/router'

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    moduleId: module.id,
})
export class SearchComponent implements OnInit, OnDestroy {
    title: string
    txt: string
    movies: IMovie[] = []
    response: IMovieResponse
    private _subscriptions = new Subscription()

    constructor(private _tmdbService: TmdbService, private _router: Router) {}

    get shouldDisplayMovies(): boolean {
        return this.movies && this.movies.length > 0 ? true : false
    }

    ngOnInit() {
        this.title = 'FOIflix'
        this.txt = 'proba'
    }

    ngOnDestroy() {
        this._subscriptions.unsubscribe()
    }

    openMovieDetails(event: MouseEvent, item: IMovie) {
        this._router.navigate(['movie', item.id])
    }

    async search(keyword: string) {
        const subscription = this._tmdbService.search<IMovieResponse>(keyword).subscribe(rsp => {
            console.error(rsp)
            this.response = new IMovieResponse(rsp)

            this.movies = this.response.results.map(item => {
                return new IMovie(item)
            })

            this._subscriptions.add(subscription)
            this._subscriptions.unsubscribe()
            console.log(this.movies, this.response)
        })
    }
}
