import { NgModule, NO_ERRORS_SCHEMA, ModuleWithProviders } from '@angular/core'
import { NativeScriptCommonModule } from 'nativescript-angular/common'
import { RouterModule } from '@angular/router'
// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from 'nativescript-angular/forms'

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpClientModule } from 'nativescript-angular/http-client'

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
        HeaderComponent,
        UserWidgetComponent,
        FooterComponent,
        DetailsComponent,
        CtaButtonComponent,
        RelatedComponent,
        BackdropComponent,
        PosterListComponent,
    ],
    imports: [NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptHttpClientModule],
    exports: [
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
    schemas: [NO_ERRORS_SCHEMA],
})
export class SharedModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SharedModule,
            providers: [RouterModule],
        } // Providers that needs to be shared in lazy loaded modules
    }
}
