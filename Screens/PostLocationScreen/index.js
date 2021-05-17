import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/core';
import { View, Text, StyleSheet } from 'react-native'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import AppLayout from '../../components/AppLayout';
import GradientButton from '../../components/GradientButton';
import PageHeader from '../../components/PageHeader';

const PostLocationScreen = () => {
    const [selectedLocation, setSelectedLocation] = useState(null)

    const navigation = useNavigation()

    const onBack = () => {
        setSelectedLocation(null)
        navigation.goBack()
    }

    const onLocationSelect = (e) => {
        setSelectedLocation(e.nativeEvent.coordinate)
    }

    return (
        <AppLayout>
            <View style={styles.contianer}>
                <PageHeader onBack={onBack}>
                    <Text style={{ flex: 1, textAlign: 'center', fontWeight: '600', fontSize: 16 }}>Share your act of kindness</Text>
                </PageHeader>
                <GradientButton
                    disabled={!selectedLocation}
                    colors={selectedLocation ? false : ['#D8D8D8', '#D8D8D8']}
                    onPress={() => { }} text={'POST'} />

            </View>
            <View style={styles.mapContainer}>
                <MapView
                    onPress={onLocationSelect}
                    provider={PROVIDER_GOOGLE}
                    style={styles.map}

                >
                    {
                        selectedLocation && [selectedLocation].map((marker, i) => {
                            const key = marker.longitude + marker.latitude + i
                            return (<Marker key={key} coordinate={{ ...marker }} >

                            </Marker>)
                        })
                    }
                </MapView>
            </View>
        </AppLayout>
    )
}
const styles = StyleSheet.create({
    contianer: {
        flex: 1,
        padding: 10,
        backgroundColor: 'white'
    },
    mapContainer: {
        height: 400,

    },
    map: {
        ...StyleSheet.absoluteFillObject,
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


export default PostLocationScreen

