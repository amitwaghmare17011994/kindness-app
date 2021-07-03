import React, { useEffect, useState } from 'react';
import {View, Text, Image} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import AppLayout from '../../components/AppLayout';
import {styles} from './styles';
import MoreView from './MoreView';
import PostView from './PostView';
import BissoTotalView from './BissoTotalView';
import RoundButton from '../../components/RoundButton';
import {useNavigation} from '@react-navigation/core';
import BissoM from '../../assets/images/bissom.png';
import { doGet } from '../../services/request';
import { usePost } from '../../hooks/usePost';
import {groupBy} from '../../utils';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {loading, postList, error} = usePost()

  const { bisoo = [], act = []} = groupBy(postList, ({post_type}) => post_type);

  const onPostClicked = () => {
    navigation.navigate('PostKindness');
  };
  return (
    <AppLayout>
      <MoreView />
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 18.5204,
            longitude:  73.8567,
            latitudeDelta:22.5726,
            longitudeDelta:88.3639,
          }}>
          {bisoo.map((ins) => <Marker key={ins.post_id} coordinate={{latitude:  Number(ins.metaData.latitude), longitude:  Number(ins.metaData.longitude)}} icon={BissoM} />)}
        </MapView>
      </View>
      <PostView onPost={onPostClicked} />
      <BissoTotalView />
      <View style={{padding: 10}}>
        <Text style={{fontWeight: '400', fontSize: 16}}>
          SIGN A <Text style={{fontWeight: 'bold'}}> BisOO</Text>
        </Text>
        {bisoo
          .map(() => (
            <View style={{marginTop: 10, borderBottomWidth: 0.3, height: 60}}>
              <View>
                <Text style={{fontWeight: 'bold', color: '#337A7E'}}>
                  BisOO Name
                </Text>

                <View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{fontSize: 12, color: '#979797', flex: 1}}>
                      98/100 Signatures Closing in 3 Days
                    </Text>
                    <RoundButton customStyles={{width: 100, height: 30}}>
                      <Text>SIGN</Text>
                    </RoundButton>
                  </View>
                </View>
              </View>
            </View>
          ))}
      </View>
    </AppLayout>
  );
};

export default HomeScreen;

