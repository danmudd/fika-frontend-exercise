import { useGetMoviesQuery } from "../../store/movies/movieSlice";
import { ActivityIndicator, Text, FlatList } from "react-native";
import { MovieItem } from "./MovieItem";
import React from "react";

interface MovieListParams {
  query: string;
}

export function MovieList({ query }: MovieListParams) {
  const { data: movies, isError, isFetching } = useGetMoviesQuery(query);

  return (
    <>
      {isError ? (
        <Text>Error loading movies</Text>
      ) : isFetching ? (
        <ActivityIndicator />
      ) : movies ? (
        <FlatList
          data={movies.results}
          renderItem={({ item }) => <MovieItem movie={item} />}
        />
      ) : null}
    </>
  );
}
