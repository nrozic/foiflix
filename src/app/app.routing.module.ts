import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { routes } from '@src/app/app.routes'

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: true, initialNavigation: 'enabled' })],
    exports: [RouterModule],
})
export class AppRoutingModule {}
