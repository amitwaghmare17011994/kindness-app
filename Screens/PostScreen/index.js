import { useNavigation } from '@react-navigation/core';
import { Button, Switch } from 'native-base';
import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign'
import AppLayout from '../../components/AppLayout';
import InputField from '../../components/Input';
import RoundButton from '../../components/RoundButton';
import TextAreaField from '../../components/TextAreaField';

const PostScreen = () => {
    const navigation = useNavigation()
    const onBack = () => navigation.goBack()
    return (
        <AppLayout>
            <View style={styles.contianer}>
                <View style={styles.header}>
                    <View onTouchEnd={onBack} style={styles.circle}>
                        <Icon name="arrowleft" size={15} color={'black'} />
                    </View>
                    <Text style={{ flex: 1, textAlign: 'center', fontWeight: '600', fontSize: 16 }}>Share your act of kindness</Text>
                    <View onTouchEnd={onBack} style={styles.circle}>
                        <Icon name="close" size={15} color={'black'} />
                    </View>
                </View>
                <TextAreaField
                    placeholder="Share your kindness story…"
                />
                <View style={{ marginTop: 10 }}>
                    <Text style={{ fontWeight: '600', fontSize: 18 }}>
                        Tag Friends
                    </Text>
                    <Text style={{ fontSize: 12, color: '#777373', fontWeight: '100' }}>
                        Add the emails of friends you would like to tag and they will be notified that you have tagged them.
                    </Text>
                    <View style={{ height: 40, marginVertical: 10 }}>
                        <InputField
                            value={'user1234@email.com'}
                        />
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Post To</Text>
                        <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontWeight: '600', fontSize: 16 }}>Facebook</Text>
                                <Text style={styles.subtitle}>
                                    https://www.facebook.com/erin.dobson1
                            </Text>
                            </View>
                            <Switch
                                size="lg"
                                value={true}

                            />
                        </View>
                    </View>
                    <View style={{ marginVertical: 10, flexDirection: 'row', alignItems: 'center' }}>

                        <Text style={{ fontWeight: 'bold', fontSize: 18, flex: 1 }}>
                            Post Anonymously
                        </Text>
                        <Switch
                            size="lg"
                            value={true}

                        />
                    </View>

                    <View>
                        <TouchableOpacity style={{ height: 30 }}>
                            <LinearGradient colors={['#FF9898', '#FF5579']} style={{ flexDirection: 'row', justifyContent: 'center', borderRadius: 50, height: '100%' }} >
                                <Text style={{ alignSelf: 'center', fontWeight: '600', fontSize: 16 }}>POST</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </AppLayout>
    )
}
const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        padding: 10
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 5
    },
    circle: {
        borderRadius: 20,
        borderWidth: 1,
        padding: 2
    },
    subtitle: {
        fontSize: 12, color: '#777373', fontWeight: '100'
    }
})


export default PostScreen

