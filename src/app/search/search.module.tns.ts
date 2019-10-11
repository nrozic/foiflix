import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { SearchComponent } from '@src/app/search/search.component'
import { NativeScriptCommonModule } from 'nativescript-angular/common'
import { SearchRoutingModule } from './search.routing.module'

@NgModule({
    declarations: [SearchComponent],
    imports: [NativeScriptCommonModule, SearchRoutingModule],
    schemas: [NO_ERRORS_SCHEMA],
})
export class SearchModule {}
