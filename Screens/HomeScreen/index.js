import React from 'react'
import { View, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import AppLayout from '../../components/AppLayout';
import { styles } from './styles'
import MoreView from './MoreView';
import PostView from './PostView';
import BissoTotalView from './BissoTotalView';
import RoundButton from '../../components/RoundButton';

const HomeScreen = () => {
    return (
        <AppLayout>
            <MoreView />
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
            <PostView />
            <BissoTotalView />
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: '400', fontSize: 16 }}>
                    SIGN A <Text style={{ fontWeight: 'bold' }}> BisOO</Text>
                </Text>
                {Array(5).fill('').map(() =>
                    <View style={{ marginTop: 10 ,borderBottomWidth:0.3,height:60}}>
                        <View>
                            <Text style={{ fontWeight: 'bold', color: '#337A7E' }}>BisOO Name</Text>

                            <View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ fontSize: 12, color: '#979797', flex: 1, }}>98/100 Signatures   Closing in 3 Days</Text>
                                    <RoundButton customStyles={{ width: 100, height: 30 }}>
                                        <Text>SIGN</Text>
                                    </RoundButton>
                                </View>
                            </View>
                        </View>
                    </View>)}
            </View>
        </AppLayout>
    )
}

export default HomeScreen

