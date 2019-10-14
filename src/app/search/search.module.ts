import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'

import { SearchComponent } from '@src/app/search/search.component'
import { SharedModule } from '@src/app/shared/shared.module'
import { SearchRoutingModule } from '@src/app/search/search.routing.module'

@NgModule({
    declarations: [SearchComponent],
    imports: [CommonModule, SearchRoutingModule, SharedModule],
    exports: [RouterModule],
})
export class SearchModule {}
