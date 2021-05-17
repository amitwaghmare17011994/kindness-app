import React from 'react'
import { StyleSheet } from 'react-native'
import { Input, Textarea } from 'native-base';

const InputField = (props) => {
    const { placeholder } = props
    return (
        <Input
            style={styles.textArea}
            {...props}
        />

    )
}


export const styles = StyleSheet.create({

    textArea: {
        backgroundColor: 'white',
        borderRadius: 1,
        marginRight: 5,
        flex: 1,
        borderWidth: 0.3
    },

});


export default InputField
