import { NgModule } from '@angular/core'
import { routes } from '@src/app/app.routes'
import { NativeScriptRouterModule } from 'nativescript-angular/router'

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule],
})
export class AppRoutingModule {}
