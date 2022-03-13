import React from "react";
import { Button, StyleSheet, Text, View } from 'react-native';
import { color } from "react-native-elements/dist/helpers";


export function Headbg() {

    let nome:String = "Carlos";
    let valor:Number = 500;
    
    return ( <>
        <View style={styles.container}>
                <Text style={stylesInfo.container}>
                    Bem vindo, {nome}
                    </Text>

                <Text style={{fontSize: 20, color: 'white'}}>
                    Você gastou hoje {'\n'}
                </Text>

                <Text style={{fontSize:35, color: 'white'}}>
                    R{'$'}{valor}
                </Text>

                <Text style={{textTransform: "uppercase", color: "white", marginTop: 50, fontWeight: 'bold', fontSize: 15}}>
                    Escolher Período:
                    </Text>

                <View style={stylesDias.container}>
                    <Text style={{color: 'white'}}>Hoje</Text>
                    <Text style={{color: 'white'}}>Este Mês</Text>
                    <Text style={{color: 'white'}}>Essa Semana</Text>
                </View>
        </View>
    </> );
}

export default Headbg;

const stylesDias = StyleSheet.create({
    container:{
        flex: 1,
        width:'90%',
        flexDirection: 'row',
        marginTop: 2,
        marginLeft: 30,
        justifyContent: 'space-around',
    }
});

const stylesInfo = StyleSheet.create({
    container:{
        marginTop: 70,
        marginBottom: 90,
        color: 'white',
        fontSize: 35,
    }
});

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        width: '100%',
        height: '60%',
        marginBottom: 110,
        paddingBottom: 1,
        backgroundColor: '#E54B4B',
        borderBottomLeftRadius: 60,
        borderBottomRightRadius: 60,
    }
});