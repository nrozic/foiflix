import { Routes } from '@angular/router'

import { HomeComponent } from '@src/app/home/home.component'

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/search',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'search',
        loadChildren: () => import(`@src/app/search/search.module`).then(m => m.SearchModule),
    },
    {
        path: 'movie/:id',
        loadChildren: () => import(`@src/app/movie/movie.module`).then(m => m.MovieModule),
    },
]
