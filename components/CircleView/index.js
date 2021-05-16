import React from 'react'
import { View, Text, Dimensions, StyleSheet } from 'react-native'

const CircleView = () => {
    return (
        <View style={styles.circle}>
            <Text>890,000</Text>
            <Text style={{ fontWeight: 'bold' }}>TOTAL BisOO</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    circle: {
        borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
        // backgroundColor: '#f00',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1
    }
})

export default CircleView
