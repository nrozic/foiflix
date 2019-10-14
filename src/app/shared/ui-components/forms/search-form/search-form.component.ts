import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core'
import { FormGroup, Validators, FormBuilder } from '@angular/forms'
import { debounceTime } from 'rxjs/operators'
import { Subscription } from 'rxjs'

@Component({
    selector: 'app-search-form',
    templateUrl: './search-form.component.html',
    styleUrls: ['./search-form.component.scss'],
})
export class SearchFormComponent implements OnInit, OnDestroy {
    @Output() formSubmit = new EventEmitter<string>()
    searchForm: FormGroup
    private _subscriptions = new Subscription()

    constructor(private _formBuilder: FormBuilder) {
        this._buildForm()
    }

    ngOnInit() {
        const subscribtion = this.searchForm.valueChanges.pipe(debounceTime(500)).subscribe((val: object) => {
            this.submit()
        })
        this._subscriptions.add(subscribtion)
    }

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
