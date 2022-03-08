import React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';


export function Headbg() {

    let nome:String = "Carlos";

    return ( <>
        <View style={styles.container}>
                <Text style={stylesInfo.container}>
                    Bem vindo, {nome}
                    </Text>

        </View>
    </> );
}

export default Headbg;

const stylesInfo = StyleSheet.create({
    container:{
        color: 'white',
        fontSize: 35,
    }
});

const styles = StyleSheet.create({
    container:{
        flex: 0,
        alignItems: 'center',
        width: '100%',
        height: '80%',
        backgroundColor: '#E54B4B',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
    }
});