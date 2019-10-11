import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SearchComponent } from '@src/app/search/search.component'
import { SearchRoutingModule } from './search.routing.module'
import { RouterModule } from '@angular/router'

@NgModule({
    declarations: [SearchComponent],
    imports: [CommonModule, SearchRoutingModule],
    exports: [RouterModule],
})
export class SearchModule {}
