import React, {useEffect} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import InputField from '../../components/Input';

import {View, Text, StyleSheet} from 'react-native';
import { updateRawData } from '../../Reducers/actions';

const InfoForm = () => {
  useEffect(() => {
    updateRawData({disableNext: false});
  }, []);

  return (
    <>
      <View>
        <Text style={{color: '#2F7A80'}}>1 To/From</Text>
        <Text style={{fontWeight: 'bold', fontSize: 13, marginTop: 5}}>
          Senders Info
        </Text>
        <Text style={{color: 'black', opacity: 0.5, marginTop: 5}}>
          This is who the card will appear to be from when it is sent to the
          recipient
        </Text>
        <View style={{marginTop: 10}}>
          <InputField
            customStyles={{height: 40, fontSize: 16}}
            placeholder={'Name'}
          />
          <InputField
            customStyles={{height: 40, fontSize: 16, marginTop: 5}}
            placeholder={'Email'}
          />
          <View style={styles.circle}>
            <Icon name="plus" size={15} color={'black'} />
          </View>
        </View>
      </View>

      <View style={{marginTop: 20}}>
        <Text
          style={{
            fontWeight: 'bold',
            color: 'black',
            fontSize: 13,
            marginTop: 5,
          }}>
          Recipients Info
        </Text>
        <Text style={{color: 'black', opacity: 0.5, marginTop: 5}}>
          This is who the card will appear to be from when it is sent to the
          recipient
        </Text>
        <View style={{marginTop: 10}}>
          <InputField
            customStyles={{height: 40, fontSize: 16}}
            placeholder={'Name'}
          />
          <InputField
            customStyles={{height: 40, fontSize: 16, marginTop: 5}}
            placeholder={'Email'}
          />
          <View style={styles.circle}>
            <Icon name="plus" size={15} color={'black'} />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 2,
    width: 22,
    marginTop: 2,
  },
});
export default InfoForm;
