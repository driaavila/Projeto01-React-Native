import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ColorPropType, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1, flexWrap:'wrap', justifyContent:'center', flexDirection:'column', alignItems: 'flex-start' }}>
      <View style={{width:50, height:50, backgroundColor: 'red'}}></View>
      <View style={{flexGrow: 1, width:50, height:50, backgroundColor: 'blue'}}></View>
      <View style={{flexShrink: 0, width:50, height:50, backgroundColor: 'green'}}></View>
    </View>
  );
}

