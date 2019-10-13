import { Component, OnInit, ViewEncapsulation } from '@angular/core'
import { TmdbService } from '../core'

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss'],
    moduleId: module.id,
})
export class SearchComponent implements OnInit {
    title: string
    txt: string
    constructor(private _tmdbService: TmdbService) {}

    ngOnInit() {
        this.title = 'FOIflixić'
        this.txt = this._tmdbService.getMovie(100)
    }

    async search() {
        this._tmdbService.search<any>('avatar').subscribe(rsp => {
            console.error(rsp)
        })
    }
}
