import { Component, OnInit, Input } from '@angular/core'

export type IButtonAction = 'play'

@Component({
    selector: 'app-cta-button',
    templateUrl: './cta-button.component.html',
    styleUrls: ['./cta-button.component.scss'],
})
export class CtaButtonComponent implements OnInit {
    @Input() text: string
    @Input() movieId: number | string
    @Input() clickAction: IButtonAction

    constructor() {}

    ngOnInit() {}

    onClick(event: MouseEvent) {
        if (this.clickAction === 'play') {
            console.log('Play clicked')
        }
    }
}
