import { Component, OnInit, HostListener } from '@angular/core'
import { Router, NavigationEnd } from '@angular/router'
import { environment } from '@src/environments/environment'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    path: string
    env = environment
    tizen = window['tizen'] || null
    webapis = window['webapis'] || null

    @HostListener('document:keydown', ['$event'])
    onkeydown(ev: KeyboardEvent) {
        if (ev.key === 'Exit') {
            this.exitApplication()
        }
    }

    constructor(private _router: Router) {
        this._routeObserver()
    }

    get shouldDisplayBgImage(): boolean {
        return this.path === '/search' || this.path === '/' ? true : false
    }

    ngOnInit() {
        this._registerTizenKeys()
    }

    exitApplication() {
        const app = this.tizen.application.getCurrentApplication()
        console.log('exitApplication()', 'Closing application')
        app.exit()
    }

    private _routeObserver() {
        this._router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {
                this.path = event.url
                console.log('plaaaa', this.path)
            }
        })
    }

    private _registerTizenKeys() {
        if (!this.tizen) {
            return
        }

        const supportedKeys = this.tizen.tvinputdevice.getSupportedKeys()

        console.log('tizen. supported keys:', supportedKeys)
        const allKeys = [
            '0',
            '1',
            '2',
            '3',
            '4',
            '5',
            '6',
            '7',
            '8',
            '9',
            '0',
            'ChannelUp',
            'ChannelDown',
            'Menu',
            'Tools',
            'Info',
            'Search',
            'Guide',
            'MediaRewind',
            'MediaPause',
            'MediaFastForward',
            'MediaRecord',
            'MediaPlay',
            'MediaStop',
            'MediaPlayPause',
            'MediaTrackPrevious',
            'MediaTrackNext',
            'PreviousChannel',
            'ChannelList',
            'Extra',
            'Teletext',
            'Minus',
            'Home',
            'Exit',
            'XF86ChannelList',
            'ColorF0Red',
            'ColorF1Green',
            'ColorF2Yellow',
            'ColorF3Blue',
        ]

        for (const key of allKeys) {
            try {
                this.tizen.tvinputdevice.registerKey(key)
                console.log(91, 'Registered key:', key)
            } catch (error) {
                console.error(93, 'failed to register ' + key + ': ' + error)
            }
        }
    }
}
