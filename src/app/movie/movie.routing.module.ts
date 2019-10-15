import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { movieRoutes } from '@src/app/movie/movie.routes'

@NgModule({
    declarations: [],
    imports: [CommonModule, RouterModule.forChild(movieRoutes)],
    exports: [RouterModule],
})
export class MovieRoutingModule {}
