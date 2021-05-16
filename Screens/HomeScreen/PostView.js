import React from 'react'
import { View, Text } from 'react-native'
import { Textarea } from 'native-base';
import RoundButton from '../../components/RoundButton';
import { styles } from './styles'
import LinearGradient from 'react-native-linear-gradient';

const PostView = () => {
    return (
        <LinearGradient colors={['#FF9898', '#FF5579']} style={styles.postView}>
            <Text style={styles.text}>Share an act of kindness</Text>
            <View style={styles.postTextView}>
                <Textarea
                    style={styles.textArea}
                    rowSpan={5}
                    placeholder="When is a time you experienced an act of kindness…" />
                <RoundButton text={'POST'} customStyles={{ width: 60 }} />
            </View>
        </LinearGradient>
    )
}

export default PostView
