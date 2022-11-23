
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import { Provider } from 'react-redux';
import { Navigation } from './navigation';
import { store } from './store';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Navigation />
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
