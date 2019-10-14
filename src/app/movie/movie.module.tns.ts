import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule } from 'nativescript-angular/common'

import { MovieComponent } from '@src/app/movie/movie.component'
import { MovieRoutingModule } from '@src/app/movie/movie.routing.module.tns'
import { SharedModule } from '@src/app/shared/shared.module.tns'

@NgModule({
    declarations: [MovieComponent],
    imports: [NativeScriptCommonModule, MovieRoutingModule, SharedModule],
    schemas: [NO_ERRORS_SCHEMA],
})
export class MovieModule {}
