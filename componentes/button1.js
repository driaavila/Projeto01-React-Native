import React from 'react';
import {render} from 'react-dom';
import {Text, Button, View} from 'react-native';


class MeuObj extends React.Component{

    state={
        corInicial: "red",
        textoInicial: "Botão 01"
    }

    pressionado = () => {
        this.setState({corInicial: 'black'});
        this.setState({textoInicial: 'clicado'});
    }

    render(){
        return(
            <View style={{ flex:1, justifyContent:'center', alignItems: 'center'}} >
                <Button
                title={this.state.textoInicial}
                accessibilityLabel="texto alternativo"
                color={this.state.corInicial}
                onPress={this.pressionado}>               
                </Button>
            </View>
        );
    }
}
export default MeuObj;
