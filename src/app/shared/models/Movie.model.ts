import { Deserialize } from './Deserialize.model'

export class IMovie extends Deserialize {
    adult: boolean
    private backdrop_path: string
    private genre_ids: number[]
    id: number
    private original_language: string
    private original_title: string
    overview: string
    popularity: number
    private poster_path: string
    private release_date: string
    title: string
    video: boolean
    private vote_average: number
    private vote_count: number

    get backdropPath(): string {
        return `https://image.tmdb.org/t/p/original/${this.backdrop_path}`
    }

    get genreIds(): number[] {
        return this.genre_ids
    }

    get originalLanguage(): string {
        return this.original_language
    }

    get originalTitle(): string {
        return this.original_title
    }

    get posterPath(): string {
        return `https://image.tmdb.org/t/p/original/${this.poster_path}`
    }

    get releaseDate(): string {
        return this.release_date
    }

    get voteAverage(): number {
        return this.vote_average
    }

    get voteCount(): number {
        return this.vote_count
    }

    constructor(data: any) {
        super()
        this._deserialize(data)
    }
}

export class IMovieResponse {
    page: number
    results: IMovie[]
    totalPages: number
    totalResults: number

    constructor(data: any) {
        this.page = data.page
        this.results = data.results.map(row => new IMovie(row))
        this.totalPages = data.total_pages
        this.totalResults = data.total_results
    }
}
