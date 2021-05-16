import React from 'react'
import { View, Text } from 'react-native'
import { Textarea } from 'native-base';
import RoundButton from '../../components/RoundButton';
import { styles } from './styles'

const PostView = () => {
    return (
        <View style={styles.postView}>
            <Text style={styles.text}>Share an act of kindness</Text>
            <View style={styles.postTextView}>
                <Textarea
                    style={styles.textArea}
                    rowSpan={5}
                    placeholder="When is a time you experienced an act of kindness…" />
                <RoundButton text={'POST'} />
            </View>
        </View>
    )
}

export default PostView
