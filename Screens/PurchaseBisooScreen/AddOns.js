import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {View, Text, Picker} from 'react-native';

const AddOns = () => {
  const [selectedValue, setSelectedValue] = useState('java');
  return (
    <View style={{height: 'auto'}}>
      <Text style={{fontWeight: 'bold', fontSize: 20}}>
        Your Basic BisOO Includes:
      </Text>
      <Text>Up to 5 signatures</Text>
      <Text style={{marginTop: 10}}>Generic URL</Text>
      <Text style={{marginTop: 10}}>
        Month Live Time beginning on the Start Date{' '}
      </Text>
      <Text style={{marginTop: 10}}>
        {' '}
        Delivery to Recipient(s) within the Live Time
      </Text>

      <View style={{marginTop: 50}}>
        <Text style={{color: '#2F7A80', fontSize: 20}}>5 Signatures</Text>
        <Text style={{marginTop: 10}}>
          Your basic BisOO can be signed by up to 5 people, select from the
          options below to allow more signatures that are represented by pins on
          the map!{' '}
        </Text>

        <View
          style={{
            marginTop: 10,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 12, marginRight: 10}}>
            Allow more signatures on your BisOO
          </Text>

          <View
            style={{
              borderWidth: 1,
              padding: 3,
              borderColor: 'black',
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
            }}>
            <Picker
              selectedValue={selectedValue}
              style={{height: 20, width: 170}}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(itemValue)
              }>
              <Picker.Item label="6-24     $4.99" value="6-24" />
              <Picker.Item label="24-52     $4.99" value="6-52" />
            </Picker>

        
          </View>
        </View>
      </View>

      <View style={{marginTop: 10}}>
        <Text style={{color: '#2F7A80', fontSize: 20}}>6 Custom URL</Text>
        <Text style={{marginTop: 10}}>
          A URL is an internet address, the link you will send to people to sign
          your BisOO as well as the link we will share with your recipient.
        </Text>
      </View>

      <View style={{marginTop: 10}}>
        <Text style={{color: '#2F7A80', fontSize: 20}}>7 Live Time</Text>
        <Text style={{marginTop: 10}}>
          Once your BisOO is live, you will have one month to collect signatures
          and view it on our site. Add on more Live Time to extend the time you
          hace to collect signatures and see your BisOO! You can edit this at
          any time from your profile and once cards expire they will remain in
          your archive.
        </Text>
      </View>
    </View>
  );
};

export default AddOns;
