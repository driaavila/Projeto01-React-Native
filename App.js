import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ColorPropType, StyleSheet, Text, View, Button} from 'react-native';
import MeuObjetos from './componentes/button1'
import MeuObjeto from './componentes/button2'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{flex:1}}>
        <View style={{flex: 1, backgroundColor: 'green'}}>
        <MeuObjetos></MeuObjetos> 
        </View>
        <View style={{flex: 1, backgroundColor: 'white'}}>
        <MeuObjeto></MeuObjeto> 
        </View>
      </View>   
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  }
});

