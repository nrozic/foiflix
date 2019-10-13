import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { environment } from '@src/environments/environment'
import { API_ROUTES } from '@src/app/shared/app.constants'
import { Observable } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class TmdbService {
    constructor(private _http: HttpClient) {}

    getMovie(id: string | number) {
        return `Bokić ${id}`
    }

    search<T>(keyword: string): Observable<T> {
        return this._http.get<T>(this._buildUrl(API_ROUTES.searchMovie, `&query=${keyword}`)).pipe(
            map((rsp: T) => {
                return rsp
            })
        )
    }

    private _buildUrl(path: string, queryParams?: string): string {
        const params = queryParams ? queryParams : ''
        return `${environment.apiBaseUrl}/${path}?api_key=${environment.apiKey}${params}`
    }
}
