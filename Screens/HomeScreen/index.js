import React from 'react'
import { View, Text } from 'react-native'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import AppLayout from '../../components/AppLayout';
import { styles } from './styles'
import MoreView from './MoreView';
import PostView from './PostView';
import BissoTotalView from './BissoTotalView';

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
            <Text style={{ fontWeight: '400', fontSize: 16 }}>
                SIGN A <Text style={{ fontWeight: 'bold' }}> BisOO</Text>
            </Text>

        </AppLayout>
    )
}

export default HomeScreen

