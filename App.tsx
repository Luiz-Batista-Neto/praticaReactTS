import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Headbg from './assets/src/Headerbg';

export default function App() {

  var Image: new (width?: 100, height?: 100) => HTMLImageElement

  return (
    <View style={styles.container}>
      <Headbg></Headbg>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {

  },
});
