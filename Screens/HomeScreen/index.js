import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Button ,Textarea } from 'native-base'; 
import AppLayout from '../../components/AppLayout';
import { styles } from './styles'

const HomeScreen = () => {
    return (
        <AppLayout>
            <View style={{ backgroundColor: '#FFECD5', padding: 20, flexDirection: 'row', justifyContent: 'center' }}>
                <Text style={{ marginLeft: 100 }}>WELCOME TO SEE KINDNESS</Text>
                <View style={{ marginLeft: 40, marginRight: 20, flexDirection: 'row' }}>
                    <Icon name="caret-down" size={20} />
                    <Text style={{ marginLeft: 5 }}>More</Text>

                </View>

            </View>
            <View style={styles.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
            <View style={styles.postView}>
                <Text style={styles.text}>Share an act of kindness</Text>
                <View style={styles.postTextView}>
                    <Textarea
                        style={styles.textArea}
                        rowSpan={5}
                        placeholder="When is a time you experienced an act of kindness…" />
                    <Button style={styles.postButton}>
                        <Text>POST</Text>
                    </Button>
                </View>
            </View>
            <View style={{ padding: 10, }}>
                <Text style={{
                    fontWeight: 'bold',
                    fontSize: 24
                }}>BisOO</Text>
                <View style={{ height: 0.5, backgroundColor: 'black', marginTop: 10 }}></View>
                <Text style={{ fontSize: 16, fontWeight: 'normal', color: '#337A7E' }}>
                    ErinDobson just signed Vancouver is Kind BisOO
                    </Text>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                    <View style={styles.circle}>
                        <Text style={{ fontSize: 33, color: 'black' }}>890,000</Text>
                        <Text >TOTAL
                                 <Text style={{ fontWeight: 'bold' }}>
                                BisOO
                                 </Text>
                        </Text>
                    </View>
                </View>
                <Text style={{ fontWeight: '400', fontSize: 16 }}>
                    SIGN A <Text style={{ fontWeight: 'bold' }}> BisOO</Text>
                </Text>

            </View>
        </AppLayout>
    )
}

export default HomeScreen

