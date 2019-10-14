import { Component, OnInit } from '@angular/core'
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router'
import { filter, map, mergeMap } from 'rxjs/operators'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    path: string
    constructor(private _router: Router, private _activatedRoute: ActivatedRoute) {}

    get shouldDisplayBgImage(): boolean {
        return this.path === '/search' ? true : false
    }
    ngOnInit() {
        this._routeObserver()
    }

    private _routeObserver() {
        this._router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.path = event.url
            }
        })
    }
}
