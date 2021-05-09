import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const HomeScreen = () => {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ backgroundColor: '#FFECD5', padding: 20, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ marginLeft: 100 }}>WELCOME TO SEE KINDNESS</Text>
                <View style={{ marginLeft: 40, marginRight: 20, flexDirection: 'row' }}>
                    <Icon name="caret-down" size={20} />
                    <Text style={{ marginLeft: 5 }}>More</Text>
                </View>

            </View>
        </View>
    )
}

export default HomeScreen
