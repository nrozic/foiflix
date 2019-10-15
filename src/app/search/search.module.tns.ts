import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from 'nativescript-angular/common'

import { SearchComponent } from '@src/app/search/search.component'
import { SearchRoutingModule } from '@src/app/search/search.routing.module'
import { SharedModule } from '@src/app/shared/shared.module.tns'

@NgModule({
    declarations: [SearchComponent],
    imports: [NativeScriptCommonModule, SearchRoutingModule, SharedModule],
    schemas: [NO_ERRORS_SCHEMA],
})
export class SearchModule {}
