
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { Provider } from 'react-redux';
import { MovieScreen } from './screens/MovieScreen';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <MovieScreen />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: StatusBar.currentHeight,
  },
});
