import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';

function Opcoes() {
    return ( <>
            <View style={styles.container}>
                <Button buttonStyle={{backgroundColor:'#fff', borderRadius: 20, height: 50, margin: 10}}>Pizza(R$ 30)</Button>
                <Button buttonStyle={{backgroundColor:'#fff', borderRadius: 20, height: 50, margin: 10}}>Coca-Cola(R$ 10)</Button>
            </View>    
    </> );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        position: 'absolute',
        width: '80%',
        height: '100%',
        marginTop: '120%',
        marginLeft: '10%'

    }
});

export default Opcoes;