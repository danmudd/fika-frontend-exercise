interface Movie {
    id: number;
    title: string;
    adult: boolean;
    backdrop_path: string | null;
    poster_path: string;
    overview: string;
    release_date: string;
    original_title: string;
    original_language: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}

interface MoviesResponse {
    page: number;
    results: Array<Movie>;
    total_pages: number;
    total_results: number;
}

type MovieResponse = Movie;

interface Genre {
    id: number;
    name: string;
}

interface GenreResponse {
    genres: Array<Genre>
}

export { Movie, Genre, MovieResponse, MoviesResponse, GenreResponse };