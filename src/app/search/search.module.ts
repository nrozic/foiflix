import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SearchComponent } from '@src/app/search/search.component'
import { SearchRoutingModule } from '@src/app/search/search.routing.module'
import { RouterModule } from '@angular/router'
import { SharedModule } from '@src/app/shared/shared.module'

@NgModule({
    declarations: [SearchComponent],
    imports: [CommonModule, SearchRoutingModule, SharedModule],
    exports: [RouterModule],
})
export class SearchModule {}
