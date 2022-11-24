import { Theme, useNavigation, useTheme } from "@react-navigation/native";
import React, { useEffect } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useGetMovieQuery } from "../../store/movies/movieSlice";

interface MovieDetailProps {
  movieId: number;
}

export function MovieDetail({ movieId }: MovieDetailProps) {
  const { colors } = useTheme();
  const styles = makeStyles(colors);

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
        <ScrollView>
          <ImageBackground
            style={styles.coverImageContainer}
            imageStyle={styles.coverImage}
            source={{ uri: movie.poster_path }}
          >
            <View style={styles.titleOverlay}>
              <Text style={styles.title}>{movie.title}</Text>
            </View>
          </ImageBackground>
          <View style={styles.detailContainer}>
            <View style={styles.detailRow}>
              <Text style={styles.detailTextFirst}>Name:</Text>
              <Text style={styles.detailTextSecond}>{movie.title}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailTextFirst}>Overview:</Text>
              <Text style={styles.detailTextSecond}>{movie.overview}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailTextFirst}>Genres:</Text>
              <Text style={styles.detailTextSecond}>
                {movie.genres.map((genre) => genre.name).join(", ")}
              </Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailTextFirst}>Release date:</Text>
              <Text style={styles.detailTextSecond}>{movie.release_date}</Text>
            </View>
            <View style={styles.detailRow}>
              <Text style={styles.detailTextFirst}>Average Rating</Text>
              <Text style={styles.detailTextSecond}>{movie.vote_average} ({movie.vote_count} votes)</Text>
            </View>
          </View>
        </ScrollView>
      ) : null}
    </>
  );
}
const makeStyles = (colors: Theme["colors"]) =>
  StyleSheet.create({
    coverImage: {
      width: "100%",
      height: 400,
      resizeMode: "contain",
      backgroundColor: colors.border,
    },
    coverImageContainer: {
      height: 400,
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
    detailContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    detailRow: {
      flexDirection: "row",
      justifyContent: "center",
      flexShrink: 0,
      borderBottomColor: "#adadad",
      borderBottomWidth: 1,
    },
    detailTextFirst: {
      flex: 1,
      textAlign: "right",
      borderRightColor: "#adadad",
      borderRightWidth: 1,
      padding: 10,
    },
    detailTextSecond: {
      flex: 1,
      padding: 10,
    },
  });
