import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import Icones from './src/Icons';
import Opcoes from './src/opcs';
import Headbg from './src/red';

export default function App() {

  //var Image: new (width?: 100, height?: 100) => HTMLImageElement

  return (
    <View style={styles.container}>
      <Headbg></Headbg>
      <Icones></Icones>
      <Opcoes></Opcoes>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: '#F7EBE8',
    height: '100%',
    width: '100%',
  }
});