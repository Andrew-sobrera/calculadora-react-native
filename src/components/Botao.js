import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Dimensions,TouchableHighlight} from 'react-native';

const style = StyleSheet.create({
    button: {
        fontSize: 40, 
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1, 
        borderColor: '#888',
    },

    operationButton: {
        color: '#fff',
        backgroundColor: '#fa8231',
    },

    doubleButton: {
        width: (Dimensions.get('window').width / 4) * 2,

    },

    tripleButton: {
        width: (Dimensions.get('window').width / 4 ) * 3,
    },
})

export default props => {
    const stylesButton = [style.button]
    if(props.double) stylesButton.push(style.doubleButton)
    if(props.triple) stylesButton.push(style.tripleButton)
    if(props.operation) stylesButton.push(style.operationButton)
    return(
        <TouchableHighlight onPress={() => props.onClick(props.label)}>

            <Text style={stylesButton}> {props.label}</Text>
            
        
         </TouchableHighlight>
    )
}