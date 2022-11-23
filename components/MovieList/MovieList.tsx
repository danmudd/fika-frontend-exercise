import { useGetMoviesQuery } from "../../store/movies/movieSlice"
import { ActivityIndicator, Text, FlatList } from "react-native";

export function MovieList() {
    const { data: movies, isError, isLoading } = useGetMoviesQuery();

    console.log(movies?.results[0]);

    return (
        <>
        <Text>Movies:</Text>
            {isError ? (
                <Text>Error loading movies</Text>
            ) : isLoading ? (
                <ActivityIndicator />
            ) : movies ? (
                <FlatList 
                    data={movies.results}                    
                    renderItem={({item}) => <Text>{item.title}</Text>}
                />
            ) : null}
        </>
    )
}