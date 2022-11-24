import { useGetMoviesQuery } from "../../store/movies/movieSlice";
import { ActivityIndicator, Text, FlatList } from "react-native";
import { MovieItem } from "./MovieItem";
import React, { useEffect, useState } from "react";
import { Movie } from "../../store/movies/types";

interface MovieListParams {
  query: string;
}

const pageSize = 20;

export function MovieList({ query }: MovieListParams) {
  const [page, setPage] = useState<number>(1);
  const [movies, setMovies] = useState<Array<Movie>>([]);
  const { data, isError, isFetching, refetch } = useGetMoviesQuery({
    query,
    page,
  });

  useEffect(() => {
    if (data && !isFetching) {
      setMovies((newMov) => {
        const moviesCopy = [...newMov];
        moviesCopy.splice(pageSize * (page - 1), pageSize, ...data?.results);
        return moviesCopy;
      });
    }
  }, [data, isFetching, page]);

  return (
    <>
      {isError ? (
        <Text>Error loading movies.</Text>
      ) : movies ? (
        <FlatList
          data={movies}
          renderItem={({ item }) => <MovieItem movie={item} />}
          onEndReached={() => (isFetching ? undefined : setPage(page + 1))}
          onEndReachedThreshold={2}
          refreshing={!!data && isFetching}
          onRefresh={() => {
            setPage(1);
            refetch();
          }}
          ListFooterComponent={<ListFooter isFetching={isFetching} />}
        />
      ) : null}
    </>
  );
}

interface ListFooterProps {
  isFetching: boolean;
}

function ListFooter({ isFetching }: ListFooterProps) {
  return isFetching ? <ActivityIndicator size="large" /> : null;
}
