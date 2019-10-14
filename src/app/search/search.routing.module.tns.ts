import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from 'nativescript-angular/common'
import { RouterModule } from '@angular/router'
import { searchRoutes } from './search.routes'

@NgModule({
    declarations: [],
    imports: [NativeScriptCommonModule, RouterModule.forChild(searchRoutes)],
    schemas: [NO_ERRORS_SCHEMA],
})
export class SearchRoutingModule {}
