import React from 'react';
import {Text, View} from 'react-native';


export default function(props){
    return(
        <View>
            <Text style={{color: 'green', fontSize: 18}}>Bem Vindo ao meu componente</Text>
            <Text>Linha 02 do meu componente</Text>
            <Text>Valor recebido é: {props.name}</Text>
        </View>
    )
}