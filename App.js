import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ColorPropType, StyleSheet, Text, View } from 'react-native';
import Meucomponente from './componentes/meucomponente';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color:'red'}}>Hello World!</Text>
      <Text style={styles.outrosEStilos}>React Native</Text>
      <Meucomponente name="Adriana"></Meucomponente>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  outrosEStilos: {
    backgroundColor: '#ff2',
    color: 'blue',
  }
});
