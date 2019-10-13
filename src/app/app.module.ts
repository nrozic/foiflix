import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from '@src/app/app.component'
import { HomeComponent } from '@src/app/home/home.component'
import { AppRoutingModule } from '@src/app/app.routing.module'
import { SharedModule } from '@src/app/shared/shared.module'
import { HttpClientModule } from '@angular/common/http'

@NgModule({
    declarations: [AppComponent, HomeComponent],
    imports: [BrowserModule, AppRoutingModule, HttpClientModule, SharedModule.forRoot()],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
