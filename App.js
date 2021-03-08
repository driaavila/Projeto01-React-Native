import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {ColorPropType, StyleSheet, Text, View, Button, Alert } from 'react-native';
import MeuObjetos from './componentes/meusobjetos'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Projeto - Botão</Text>
      <StatusBar style="auto" />
      <Button 
        title="Clique Aqui"
        color= "blue"
        accessibilityLabel="Texto Alternativo"
        onPress={funcaoBotao}>
      </Button>
      <MeuObjetos></MeuObjetos>              

    </View>
  );
}

function funcaoBotao(){
  Alert.alert('Botão clicado')
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

