import React from 'react';
import {render} from 'react-dom';
import {Text, Button, View} from 'react-native';


class MeuObj extends React.Component{

    state={
        corInicial: "green",
        textoInicial: "Este texto está dentro de Meus Obejtos"
    }

    pressionado = () => {
        this.setState({corInicial: 'orange'});
        this.setState({textoInicial: 'alterado'})
    }

    render(){
        return(
            <View>
                <Button
                title="botão novo"
                accessibilityLabel="texto alternativo"
                color={this.state.corInicial}
                onPress={this.pressionado}>
                </Button>
                <Text>{this.state.textoInicial}</Text>
            </View>
        );
    }
}
export default MeuObj;
