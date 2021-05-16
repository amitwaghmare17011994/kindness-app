import React from 'react'
import { Button } from 'native-base'
import { Text, StyleSheet } from 'react-native'

const RoundButton = (props) => {
    const { text, customStyles = {}, textStyles = {} } = props
    return (
        <Button style={{ ...styles.postButton, ...customStyles }}>
            { text && <Text style={{ ...textStyles }}>{text}</Text>
            }
            {props.children}
        </Button>
    )
}


const styles = StyleSheet.create({

    postButton: {
        // flex: 0.3,
        backgroundColor: 'white',
        borderRadius: 20,
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },
})

export default RoundButton
