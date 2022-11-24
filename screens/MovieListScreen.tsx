
import { Theme, useTheme } from "@react-navigation/native";
import { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, TouchableOpacity } from "react-native";
import { MovieList } from "../components/MovieList/MovieList";
import useDebounce from "../hooks/useDebounce";

export function MovieListScreen() {
    const [query, setQuery] = useState<string>("");
    const debouncedQuery = useDebounce<string>(query, 500);
    const {colors} = useTheme();
    const styles = makeStyles(colors);

    return (
        <View style={styles.container}>
            <View style={styles.searchRow}>
                <TextInput 
                  clearButtonMode="always"
                  value={query}
                  placeholder="Search movies..."
                  style={styles.searchInput}
                  onChangeText={query => setQuery(query)}
                />
                <TouchableOpacity
                  style={styles.clearButton}
                  onPress={() => setQuery("")}
                >
                  <Text>Clear</Text>
                </TouchableOpacity>
            </View>
            <MovieList query={debouncedQuery} />
        </View>
    )
}



const makeStyles = (colors: Theme["colors"]) => StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#f8f8f8",
      padding: 20
    },
    searchRow: {
      flexDirection: "row",
      paddingBottom: 10
    },
    clearButton: {
      borderRadius: 20,
      backgroundColor: colors.primary,
      padding: 15,
      marginLeft: 10
    },
    searchInput: {
        borderRadius: 20,
        backgroundColor: "#fff",
        padding: 10,
        flex: 1
    }
});