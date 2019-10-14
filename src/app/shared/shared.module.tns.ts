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

@NgModule({
    declarations: [SearchFormComponent, HeaderComponent, UserWidgetComponent, FooterComponent],
    imports: [NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptHttpClientModule],
    exports: [SearchFormComponent, HeaderComponent, UserWidgetComponent, FooterComponent],
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
