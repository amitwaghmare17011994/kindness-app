import React from 'react'
import { View, Text } from 'react-native'
import { Textarea } from 'native-base';
import RoundButton from '../../components/RoundButton';
import { styles } from './styles'
import LinearGradient from 'react-native-linear-gradient';
import TextAreaField from '../../components/TextAreaField';

const PostView = (props) => {
    const { onPost } = props
    return (
        <LinearGradient colors={['#FF9898', '#FF5579']} style={styles.postView}>
            <Text style={styles.text}>Share an act of kindness</Text>
            <View style={styles.postTextView}>

                <TextAreaField
                    placeholder="When is a time you experienced an act of kindness…"

                />
                <RoundButton onPress={onPost} text={'POST'} customStyles={{ width: 60 }} />
            </View>
        </LinearGradient>
    )
}

export default PostView
