
import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { MovieDetail } from "../components/MovieDetail/MovieDetail";
import { RootStackScreenProps } from "../navigation";

export function MovieDetailScreen({ route }: RootStackScreenProps<"Movie">) {
    const { movieId } = route.params;
    
    return (
        <View style={styles.container}>
            <MovieDetail movieId={movieId} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f8f8f8",
      padding: 20
    },
});