
import { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import { MovieList } from "../components/MovieList/MovieList";
import useDebounce from "../hooks/useDebounce";

export function MovieScreen() {
    const [query, setQuery] = useState<string>("");
    const debouncedQuery = useDebounce<string>(query, 500);

    return (
        <View style={styles.container}>
            <TextInput 
                clearButtonMode="always"
                value={query}
                placeholder="Search movies..."
                style={styles.searchInput}
                onChangeText={query => setQuery(query)}
            />
            <MovieList query={debouncedQuery} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f8f8f8",
      padding: 20
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
    },
    separator: {
      marginVertical: 30,
      height: 1,
      width: '80%',
    },
    searchInput: {
        borderRadius: 20,
        backgroundColor: "#fff",
        padding: 10
    }
});