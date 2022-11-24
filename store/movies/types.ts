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
  genre_ids: Array<number>;
}

type MovieDetail = Omit<Movie, "genre_ids"> & {
  genres: Array<Genre>;
};

interface MoviesResponse {
  page: number;
  results: Array<Movie>;
  total_pages: number;
  total_results: number;
}

type MovieResponse = MovieDetail;

interface Genre {
  id: number;
  name: string;
}

interface GenreResponse {
  genres: Array<Genre>;
}

interface MovieQueryParams {
  query: string;
  page: number;
}

export {
  Movie,
  MovieDetail,
  Genre,
  MovieResponse,
  MoviesResponse,
  GenreResponse,
  MovieQueryParams,
};
