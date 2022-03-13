import React from "react";
import { View, Text, StyleSheet } from 'react-native';
import { Button, Input } from 'react-native-elements';

function Icones() {
    return ( <>
        <View style={styles.container}>
            <Button icon={{name:'flight', color:'#fff'}} buttonStyle={{backgroundColor:'#444140', marginHorizontal: 5}}/>
            <Button icon={{name:'home', color: 'white'}} buttonStyle={{backgroundColor:'#444140', marginHorizontal: 5}}/>
            <Button icon={{name:'local-dining', color: 'white'}} buttonStyle={{backgroundColor:'#444140', marginHorizontal: 5}}/>
            <Button icon={{name:'home', color: 'white'}} buttonStyle={{backgroundColor:'#444140', marginHorizontal: 5}}/>
            <Button icon={{name:'build', color: 'white'}} buttonStyle={{backgroundColor:'#444140', marginHorizontal: 5}}/>
        </View>
    
    </> );
}

export default Icones;

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: '10%',
        position: 'absolute',
        marginTop: '105%',
    }
});
