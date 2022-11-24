import { DarkTheme, NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from "@react-navigation/native-stack";
import React from "react";
import { MovieDetailScreen } from "../screens/MovieDetailScreen";
import { MovieListScreen } from "../screens/MovieListScreen";

export function Navigation() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator initialRouteName="Movies">
      <Stack.Screen name="Movies" component={MovieListScreen} />
      <Stack.Screen name="Movie" component={MovieDetailScreen} />
    </Stack.Navigator>
  );
}

type RootStackParamList = {
  Movies: undefined;
  Movie: { movieId: number };
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
