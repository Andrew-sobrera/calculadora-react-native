import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Dimensions,View } from 'react-native';

const style = StyleSheet.create({
    display: {
      flex: 1,
       padding: 20,
       justifyContent: 'center',
       backgroundColor: 'rgba(0,0,0,0.6)',
       alignItems: 'flex-end',
       height: 350,
       width: 412,
    },

    displayValue:{
        fontSize: 60,
        color: '#fff'
    }
})

export default props => {
    return(
    <View style={style.display}>
       <Text style={style.displayValue} numberOflines={1}> {props.value}</Text>
    </View>
    )
}