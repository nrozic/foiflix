import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from 'nativescript-angular/common'
import { RouterModule } from '@angular/router'

import { movieRoutes } from '@src/app/movie/movie.routes'

@NgModule({
    declarations: [],
    imports: [NativeScriptCommonModule, RouterModule.forChild(movieRoutes)],
    schemas: [NO_ERRORS_SCHEMA],
})
export class MovieRoutingModule {}
