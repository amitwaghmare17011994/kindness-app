import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import {View, Text} from 'react-native';
import InputField from '../../../components/Input';
import ColorChooser from '../../ColorChooser';

const SolidBackground = () => {
  const navigation = useNavigation();
  const [showColor, setShowColor] = useState('');
  const [textColor, setTextColor] = useState('brown');
  const [backgroundColor, setBackgroundColor] = useState('#ffcc4c');
  const onColorChange = color => {
    if (showColor === 'back') {
      setBackgroundColor(color);
    }
    if (showColor === 'font') {
      setTextColor(color);
    }
  };
  return (
    <View>
      <View
        style={{
          backgroundColor: backgroundColor,
          height: 100,
          elevation: 4,
        }}>
        <View style={{alignItems: 'center', flex: 1}}>
          <Text style={{color: textColor}}>Card Title eg.</Text>
          <Text style={{color: textColor}}>Thanks Nurses</Text>
          <Text style={{fontSize: 8, color: textColor}}>
            Personalized thank you message here
          </Text>
        </View>
        <View style={{flexDirection: 'row', padding: 5}}>
          <Text style={{fontSize: 8, flex: 1, color: textColor}}>
            Closing Date/Signature #
          </Text>
          <Text style={{fontSize: 8, color: textColor}}>
            10 / 100 Signatures
          </Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text style={{fontWeight: 'bold', flex: 0.5}}>Font Colour</Text>
        <Text style={{fontWeight: 'bold'}}>Card Colour</Text>
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
          <InputField
            value={textColor}
            customStyles={{height: 40, fontSize: 18}}
          />
          <View
            onTouchEnd={() => {
              setShowColor('font');
            }}
            style={{
              backgroundColor: textColor || 'black',
              height: 20,
              width: 20,
              borderRadius: 5,
            }}></View>
        </View>
        <View style={{flex: 0.5, flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{marginRight: 5}}>#</Text>
          <InputField
            value={backgroundColor}
            customStyles={{height: 40, fontSize: 18}}
          />
          <View
            onTouchEnd={() => {
              setShowColor('back');
            }}
            style={{
              backgroundColor: backgroundColor || 'black',
              height: 20,
              width: 20,
              borderRadius: 5,
            }}></View>
        </View>
      </View>
      <View style={{height: !!showColor?200:0}}></View>

      {!!showColor && (
        <>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              backgroundColor: 'white',
              zIndex:111
            }}>
            <ColorChooser
              onClose={() => setShowColor('')}
              onColorChangeHandler={onColorChange}
              color={
                showColor === 'back'
                  ? backgroundColor
                  : showColor === 'font'
                  ? textColor
                  : 'green'
              }
            />
          </View>
        </>
      )}
    </View>
  );
};

export default SolidBackground;
