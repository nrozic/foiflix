import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { MovieComponent } from '@src/app/movie/movie.component'
import { SharedModule } from '@src/app/shared/shared.module'
import { MovieRoutingModule } from '@src/app/movie/movie.routing.module'

@NgModule({
    declarations: [MovieComponent],
    imports: [CommonModule, MovieRoutingModule, SharedModule],
    exports: [RouterModule],
})
export class MovieModule {}
