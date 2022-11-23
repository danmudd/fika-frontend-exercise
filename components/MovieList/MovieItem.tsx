import { Movie } from "../../store/movies/types";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackScreenProps } from "../../navigation";

interface MovieProps {
    movie: Movie;
}

export function MovieItem({movie}: MovieProps) {
    const navigation = useNavigation<RootStackScreenProps<"Movie">["navigation"]>();

    return (
        <TouchableOpacity style={styles.movie} onPress={() => navigation.navigate("Movie", {
            movieId: movie.id
        })}>
            <Image style={styles.movieImage} source={{ uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`}} />
            <View style={styles.infoContainer}>
                <Text style={styles.movieTitle}>{movie.title}</Text>
                {/* <Text>Genres: {movie.genres.join(", ")}</Text> */}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    movie: {
        marginTop: 10,
        padding: 20,
        flexDirection: "row",
        backgroundColor: "#fff",
    },
    movieTitle: {
        fontSize: 24,
    },
    movieImage: {
        width: 100,
        height: 100,
        borderRadius: 10
    },
    infoContainer: {
        marginLeft: 10,
        flexShrink: 1
    }
})