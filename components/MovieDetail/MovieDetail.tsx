import React from "react";
import { ActivityIndicator, Text } from "react-native";
import { useGetMovieQuery } from "../../store/movies/movieSlice";

interface MovieDetailProps {
    movieId: number;
}

export function MovieDetail({movieId}: MovieDetailProps) {
    const { data: movie, isError, isFetching } = useGetMovieQuery(movieId);

    return (
        <>
        {isError ? (
            <Text>Error loading movie.</Text>
        ) : isFetching ? (
            <ActivityIndicator />
        ) : movie ? (
            <>
                <Text>{movie.title}</Text>
            </>
        ) : null}
    </>
    );
}