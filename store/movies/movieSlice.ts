import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GenreResponse, MovieResponse, MoviesResponse } from "./types";

// DM: I don't like having the API key checked into source control here
const defaultParams = {
  api_key: "d432b933ecc6d5642d8d2befbc40c7ac",
  language: "en-US",
};

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getMovies: builder.query<MoviesResponse, string>({
      query: (query) => {
        if (query !== "") {
          return {
            url: "search/movie",
            params: {
              ...defaultParams,
              include_adult: "false",
              query,
            },
          };
        } else {
          return {
            url: "discover/movie",
            params: {
              ...defaultParams,
              include_adult: "false",
            },
          };
        }
      },
    }),
    getMovie: builder.query<MovieResponse, number>({
      query: (movieId) => ({
        url: `movie/${movieId}`,
        params: { ...defaultParams },
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
