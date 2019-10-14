import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ModuleWithProviders } from '@angular/compiler/src/core'
import { RouterModule } from '@angular/router'
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { SearchFormComponent } from '@src/app/shared/ui-components/forms/search-form/search-form.component'
import { HeaderComponent } from '@src/app/shared/ui-components/header/header.component'
import { UserWidgetComponent } from '@src/app/shared/ui-components/user-widget/user-widget.component'
import { FooterComponent } from '@src/app/shared/ui-components/footer/footer.component'
import { DetailsComponent } from '@src/app/shared/ui-components/details/details.component'
import { CtaButtonComponent } from '@src/app/shared/ui-components/buttons/cta-button/cta-button.component'
import { RelatedComponent } from '@src/app/shared/ui-components/related/related.component'
import { BackdropComponent } from '@src/app/shared/ui-components/backdrop/backdrop.component'
import { PosterListComponent } from '@src/app/shared/ui-components/poster-list/poster-list.component'

@NgModule({
    declarations: [
        SearchFormComponent,
        SearchFormComponent,
        HeaderComponent,
        UserWidgetComponent,
        FooterComponent,
        DetailsComponent,
        CtaButtonComponent,
        RelatedComponent,
        BackdropComponent,
        PosterListComponent,
    ],
    imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        SearchFormComponent,
        HeaderComponent,
        UserWidgetComponent,
        FooterComponent,
        DetailsComponent,
        CtaButtonComponent,
        RelatedComponent,
        BackdropComponent,
        PosterListComponent,
    ],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [RouterModule],
        } // Providers that needs to be shared in lazy loaded modules
    }
}
