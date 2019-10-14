import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ModuleWithProviders } from '@angular/compiler/src/core'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { SearchFormComponent } from '@src/app/shared/ui-components/forms/search-form/search-form.component'
import { HeaderComponent } from '@src/app/shared/ui-components/header/header.component'
import { UserWidgetComponent } from '@src/app/shared/ui-components/user-widget/user-widget.component'
import { FooterComponent } from '@src/app/shared/ui-components/footer/footer.component'

@NgModule({
    declarations: [SearchFormComponent, SearchFormComponent, HeaderComponent, UserWidgetComponent, FooterComponent],
    imports: [CommonModule, ReactiveFormsModule, FormsModule],
    exports: [ReactiveFormsModule, FormsModule, SearchFormComponent, HeaderComponent, UserWidgetComponent, FooterComponent],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [RouterModule],
        } // Providers that needs to be shared in lazy loaded modules
    }
}
