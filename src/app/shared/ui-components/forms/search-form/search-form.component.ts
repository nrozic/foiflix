import { Component, OnInit, OnDestroy, Output, EventEmitter, ViewChild, ElementRef, AfterViewInit, HostListener } from '@angular/core'
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { debounceTime } from 'rxjs/operators'
import { Subscription } from 'rxjs'

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit, AfterViewInit, OnDestroy {
    @Output() formSubmit = new EventEmitter<string>()
    @ViewChild('search', { static: false }) searchInput: ElementRef
    searchForm: FormGroup
    focus: string
    private _subscriptions = new Subscription()

    @HostListener('document:keydown', ['$event'])
    onkeydown(ev: KeyboardEvent) {
        console.log('keydown', ev)
        this.submit()

        if (ev.key === 'ColorF1Green') {
            this.searchInput.nativeElement.focus()
        }

        // if (ev.key === 'ColorF3Blue') {
        //     this.searchInput.nativeElement.focus()
        // }

        if (ev.key === 'ColorF0Red') {
            this.searchInput.nativeElement.blur()
        }

        if (ev.key === 'Enter') {
            this.submit()
        }
    }

    constructor(private _formBuilder: FormBuilder) {
        this._buildForm()
    }

    ngOnInit() {
        const subscribtion = this.searchForm.valueChanges.pipe(debounceTime(500)).subscribe((val: object) => {
            console.log('ValueChanges', val)
            this.submit()
        })
        this._subscriptions.add(subscribtion)
    }

    ngAfterViewInit() {}

    ngOnDestroy() {
        this._subscriptions.unsubscribe()
    }

    submit(): void {
        if (this.searchForm.valid) {
            this.formSubmit.emit(this.searchForm.controls.keyword.value)
        }
    }

    private _buildForm(): void {
        this.searchForm = this._formBuilder.group(
            {
                keyword: ['', [Validators.required, Validators.minLength(3)]],
            },
            { updateOn: 'change' }
        )
    }
}
