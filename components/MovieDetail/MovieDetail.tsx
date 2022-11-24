import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useGetMovieQuery } from "../../store/movies/movieSlice";

interface MovieDetailProps {
  movieId: number;
}

export function MovieDetail({ movieId }: MovieDetailProps) {
  const { data: movie, isError, isFetching } = useGetMovieQuery(movieId);

  const navigation = useNavigation();

  useEffect(() => {
    if (typeof movie !== "undefined")
      navigation.setOptions({
        title: movie?.title,
      });
  }, [movie, navigation]);

  return (
    <>
      {isError ? (
        <Text>Error loading movie.</Text>
      ) : isFetching ? (
        <ActivityIndicator />
      ) : movie ? (
        <>
          <View style={styles.coverImageWrapper}>
            <ImageBackground
              style={styles.coverImage}
              source={{ uri: movie.poster_path }}
            >
              <View style={styles.titleOverlay}>
                <Text style={styles.title}>{movie.title}</Text>
              </View>
            </ImageBackground>
          </View>
        </>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  coverImageWrapper: {
    height: 200,
    overflow: "hidden",
  },
  coverImage: {
    width: "100%",
    height: 600,
    resizeMode: "cover",
  },
  title: {
    color: "#fff",
    fontSize: 20,
    textAlign: "right",
  },
  titleOverlay: {
    marginLeft: "auto",
    backgroundColor: "rgba(50,50,50,0.6)",
    margin: 10,
    padding: 5,
    borderRadius: 10,
    maxWidth: "40%",
    borderWidth: 1,
    borderColor: "#adadad",
  },
});
