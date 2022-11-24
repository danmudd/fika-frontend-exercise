import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  GenreResponse,
  MovieQueryParams,
  MovieResponse,
  MoviesResponse,
} from "./types";

// DM: I don't like having the API key checked into source control here
const defaultParams = {
  api_key: "d432b933ecc6d5642d8d2befbc40c7ac",
  language: "en-US",
};

const imagePrefix = "https://image.tmdb.org/t/p/w500";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesResponse, MovieQueryParams>({
      query: ({ query, page }) => {
        if (query !== "") {
          return {
            url: "search/movie",
            params: {
              ...defaultParams,
              include_adult: "false",
              query,
              page,
            },
          };
        } else {
          return {
            url: "discover/movie",
            params: {
              ...defaultParams,
              include_adult: "false",
              page,
            },
          };
        }
      },
      transformResponse: (response: MoviesResponse) => ({
        ...response,
        results: response.results.map((movie) => ({
          ...movie,
          poster_path: `${imagePrefix}${movie.poster_path}`,
          backdrop_path: `${imagePrefix}${movie.backdrop_path}`,
        })),
      }),
    }),
    getMovie: builder.query<MovieResponse, number>({
      query: (movieId) => ({
        url: `movie/${movieId}`,
        params: { ...defaultParams },
      }),
      transformResponse: (response: MovieResponse) => ({
        ...response,
        poster_path: `${imagePrefix}${response.poster_path}`,
        backdrop_path: `${imagePrefix}${response.backdrop_path}`,
      }),
    }),
    getGenres: builder.query<GenreResponse, void>({
      query: () => ({
        url: "genre/movie/list",
        params: { ...defaultParams },
      }),
    }),
  }),
});

export const {
  useGetMoviesQuery,
  useGetMovieQuery,
  usePrefetch,
  useGetGenresQuery,
} = moviesApi;
