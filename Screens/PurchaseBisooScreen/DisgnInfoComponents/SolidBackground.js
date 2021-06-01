import React from 'react';
import {View, Text} from 'react-native';
import InputField from '../../../components/Input';

const SolidBackground = () => {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#ffcc4c',
          height: 100,
          elevation: 4,
        }}>
        <View style={{alignItems: 'center', flex: 1}}>
          <Text>Card Title eg.</Text>
          <Text>Thanks Nurses</Text>
          <Text style={{fontSize: 8}}>Personalized thank you message here</Text>
        </View>
        <View style={{flexDirection: 'row', padding: 5}}>
          <Text style={{fontSize: 8, flex: 1}}>Closing Date/Signature #</Text>
          <Text style={{fontSize: 8}}>10 / 100 Signatures</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text style={{fontWeight: 'bold', flex: 0.5}}>Font Colour</Text>
        <Text style={{fontWeight: 'bold'}}>Font Colour</Text>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <View
          style={{
            flex: 0.5,
            flexDirection: 'row',
            marginRight: 10,
            alignItems: 'center',
          }}>
          <Text style={{marginRight: 5}}>#</Text>
          <InputField customStyles={{height: 30}} />
          <View
            style={{
              backgroundColor: 'black',
              height: 20,
              width: 20,
              borderRadius: 5,
            }}></View>
        </View>
        <View style={{flex: 0.5, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{marginRight: 5}}>#</Text>
          <InputField customStyles={{height: 30}} />
          <View
            style={{
              backgroundColor: 'black',
              height: 20,
              width: 20,
              borderRadius: 5,
            }}></View>
        </View>
      </View>
    </View>
  );
};

export default SolidBackground;
