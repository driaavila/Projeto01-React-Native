import React from 'react';
import {render} from 'react-dom';
import {Text, Button, View} from 'react-native';


class MeuObjeto extends React.Component{

    state={
        corInicial: "black",
        textoInicial: "Botão 02"
    }

    pressionado = () => {
        this.setState({corInicial: 'blue'});
        this.setState({textoInicial: 'clicado'});
    }

    render(){
        return(
            <View style={{ justifyContent:'space-around', alignItems: 'center' }}>
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
export default MeuObjeto;
