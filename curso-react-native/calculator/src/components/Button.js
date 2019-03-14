import React from  'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    TouchableHighlight,
} from 'react-native'

const Styles = StyleSheet.create({
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
    buttonDouble: {
        width: (Dimensions.get('window').width / 4 ) * 2,
    },
    buttonTriple: {
        width: (Dimensions.get('window').width / 4 ) * 3,
    },
})

export default props => {
    const styleButton = [Styles.button]
    if (props.double) styleButton.push(Styles.buttonDouble)
    if (props.triple) styleButton.push(Styles.buttonTriple)
    if (props.operation) styleButton.push(Styles.operationButton)

    return (
        <TouchableHighlight onPress={() => props.onClick(props.label)}>
            <Text style={styleButton}>{props.label}</Text>
        </TouchableHighlight>
    )
}