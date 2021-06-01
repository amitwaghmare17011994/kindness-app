import React, {useState} from 'react';
import {Radio} from 'native-base';
import {View, Text, Image} from 'react-native';
import DesignImage from '../../assets/images/design.png';
import SolidBackground from './DisgnInfoComponents/SolidBackground';
import BackgroundImage from './DisgnInfoComponents/BackgroundImage';

const DesignInfo = () => {
  const [selectedOption, setSelectedOption] = useState(0);
  return (
    <View  >
      <Text style={{color: '#357B7F'}}>2 Design</Text>
      <Text style={{fontWeight: 'bold', marginTop: 10}}>
        Select Card Template
      </Text>
      

      {/* First */}
      <View
        style={{flexDirection: 'row', marginTop: 10, alignItems: 'flex-start'}}>
        <View
          style={{flexDirection: 'row', flex: 0.6}}
          onTouchEnd={() => setSelectedOption(1)}>
          <Radio
            selected={selectedOption === 1}
            color={'black'}
            selectedColor={'#357B7F'}
          />
          <Text style={{marginLeft: 5, fontWeight: '400'}}>
            Solid Background Colour
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#ffcc4c',
            height: 80,
            flex: 1,
            marginLeft: 40,
            elevation: 4,
          }}>
          <View style={{alignItems: 'center', flex: 1}}>
            <Text>Card Title eg.</Text>
            <Text>Thanks Nurses</Text>
            <Text style={{fontSize: 8}}>
              Personalized thank you message here
            </Text>
          </View>
          <View style={{flexDirection: 'row', padding: 5}}>
            <Text style={{fontSize: 8, flex: 1}}>Closing Date/Signature #</Text>
            <Text style={{fontSize: 8}}>10 / 100 Signatures</Text>
          </View>
        </View>
      </View>
      {/* First */}

      {/* Sec */}
      <View
        style={{
          flexDirection: 'row',
          elevation: 4,
          marginTop: 10,
          alignItems: 'flex-start',
        }}>
        <View
          style={{flexDirection: 'row', flex: 0.6}}
          onTouchEnd={() => setSelectedOption(2)}>
          <Radio
            selected={selectedOption === 2}
            color={'black'}
            selectedColor={'#357B7F'}
          />
          <Text style={{marginLeft: 5, fontWeight: '400'}}>
            Background Colour and Overlay Image
          </Text>
        </View>
        <View
          style={{
            backgroundColor: '#ffcc4c',
            height: 80,
            flex: 1,

            marginLeft: 40,
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image
              source={DesignImage}
              style={{width: 50, height: 50, margin: 5}}
            />
            <View style={{marginLeft: 5}}>
              <Text>Card Title eg.</Text>
              <Text>Thanks Nurses</Text>
              <Text style={{fontSize: 5}}>
                Personalized thank you message here
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', padding: 5}}>
            <Text style={{fontSize: 8, flex: 1}}>Closing Date/Signature #</Text>
            <Text style={{fontSize: 8}}>10 / 100 Signatures</Text>
          </View>
        </View>
      </View>
      {/* Sec */}

      {/* Third */}
      <View
        style={{flexDirection: 'row', marginTop: 10, alignItems: 'flex-start'}}>
        <View
          style={{flexDirection: 'row', flex: 0.6}}
          onTouchEnd={() => setSelectedOption(3)}>
          <Radio
            selected={selectedOption === 3}
            color={'black'}
            selectedColor={'#357B7F'}
          />

          <Text style={{marginLeft: 5, fontWeight: '400'}}>
            Background Image
          </Text>
        </View>
        <View
          style={{
            elevation: 1,
            height: 80,
            flex: 1,
            padding: 5,
            marginLeft: 40,
          }}>
          <View style={{flex: 1, alignItems: 'center'}}>
            <View style={{marginLeft: 5}}>
              <Text>Card Title eg.</Text>
              <Text>Thanks Nurses</Text>
              <Text style={{fontSize: 5}}>
                Personalized thank you message here
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', padding: 5}}>
            <Text style={{fontSize: 8, flex: 1}}>Closing Date/Signature #</Text>
            <Text style={{fontSize: 8}}>10 / 100 Signatures</Text>
          </View>
        </View>
      </View>
      {/* Third */}

      {/* Fourth */}
      <View
        style={{flexDirection: 'row', marginTop: 10, alignItems: 'flex-start'}}>
        <View
          style={{flexDirection: 'row', flex: 0.6}}
          onTouchEnd={() => setSelectedOption(4)}>
          <Radio
            selected={selectedOption === 4}
            color={'black'}
            selectedColor={'#357B7F'}
          />
          <Text style={{marginLeft: 5, fontWeight: '400'}}>
            Background Image and Overlay Image
          </Text>
        </View>
        <View
          style={{
            // backgroundColor: '#ffcc4c',
            height: 80,
            flex: 1,
            elevation: 1,
            marginLeft: 40,
            padding: 5,
          }}>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <Image
              source={DesignImage}
              style={{width: 50, height: 50, margin: 5}}
            />
            <View style={{marginLeft: 5}}>
              <Text>Card Title eg.</Text>
              <Text>Thanks Nurses</Text>
              <Text style={{fontSize: 5}}>
                Personalized thank you message here
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', padding: 5}}>
            <Text style={{fontSize: 8, flex: 1}}>Closing Date/Signature #</Text>
            <Text style={{fontSize: 8}}>10 / 100 Signatures</Text>
          </View>
        </View>
      </View>
      {/* Fourth */}
     
     
     
      {selectedOption === 1 && <SolidBackground />}
      {selectedOption === 2 && <BackgroundImage/>}

     </View>
  );
};

export default DesignInfo;
