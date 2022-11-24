import { Genre, Movie } from "../../store/movies/types";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackScreenProps } from "../../navigation";
import { useGetGenresQuery } from "../../store/movies/movieSlice";
import { createSelector } from "@reduxjs/toolkit";
import React, { useMemo } from "react";

interface MovieProps {
  movie: Movie;
}

export function MovieItem({ movie }: MovieProps) {
  const navigation =
    useNavigation<RootStackScreenProps<"Movie">["navigation"]>();

  // DM: This is a bit of an untyped mess. I couldn't figure out how to type this in time!
  const selectGenres: (res: any, genres: any) => Array<Genre> = useMemo(() => {
    return createSelector(
      (res: { data: any }) => res.data,
      (res: any, genres: any) => genres,
      (data: { genres: any[] }, genres: string | any[]) =>
        data?.genres.filter((genre: { id: any }) =>
          genres.includes(genre.id)
        ) ?? []
    );
  }, []);

  const { genres } = useGetGenresQuery(undefined, {
    selectFromResult: (result) => ({
      genres: selectGenres(result, movie.genre_ids),
    }),
  });

  return (
    <TouchableOpacity
      style={styles.movie}
      delayPressIn={50} // stops highlighting on scroll
      onPress={() =>
        navigation.navigate("Movie", {
          movieId: movie.id,
        })
      }
    >
      <Image style={styles.movieImage} source={{ uri: movie.poster_path }} />
      <View style={styles.infoContainer}>
        <Text style={styles.movieTitle}>{movie.title}</Text>
        <Text>Genres: {genres.map((genre) => genre.name).join(", ")}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  movie: {
    marginTop: 10,
    padding: 20,
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 5,
  },
  movieTitle: {
    fontSize: 24,
  },
  movieImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  infoContainer: {
    marginLeft: 10,
    flexShrink: 1,
  },
});
