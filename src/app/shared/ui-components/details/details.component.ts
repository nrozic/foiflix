import { Component, OnInit, Input, HostListener } from '@angular/core'
import { IMovie } from '@src/app/shared/models/Movie.model'
import { Router } from '@angular/router'

@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
    @Input() movie: IMovie

    @HostListener('document:keydown', ['$event'])
    onkeydown(ev: KeyboardEvent) {
        // const pressed = this.rc.getKey(ev);
        // if (!this.content.exitPromptActive && this.focus.content !== 'popup') {
        //     if (typeof this[pressed['name']] === 'function') {
        //         this[pressed['name']]();
        //     } else {
        //         // console.log('You forgot to define function', pressed, this.focus.content);
        //     }
        // }
        console.log(ev)
    }

    constructor(private _router: Router) {
        this._router.routeReuseStrategy.shouldReuseRoute = () => false
    }

    ngOnInit() {}

    shouldDisplayComma(index: number): boolean {
        return index < this.movie.genres.length - 1 ? true : false
    }
}
