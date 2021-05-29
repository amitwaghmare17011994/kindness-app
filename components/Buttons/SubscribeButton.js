
import React from 'react'
import { Text } from 'react-native'
import RoundButton from '../RoundButton'
import {useNavigation} from '@react-navigation/native';

export default () => {
    const navigation = useNavigation();

    return (
        <RoundButton  onPress={() => navigation.navigate('SubscribeScreen')} customStyles={{width:200,height:30,marginTop:20}}>
            <Text style={{ color: '#2F7A80' }}>Subscribe</Text>
        </RoundButton>
    )
}
