import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/AntDesign';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {View, Text, Image, ImageBackground} from 'react-native';
import InputField from '../../../components/Input';
import ColorChooser from '../../ColorChooser';
import RoundButton from '../../../components/RoundButton';
import DesignImage from '../../../assets/images/design.png';

const ViewBackground = () => {
  const navigation = useNavigation();
  const [selectedImage, setSelectedImage] = useState('');
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
      <ImageBackground
        source={{uri: selectedImage?.uri || null}}
        style={{
          height: 100,
          elevation: 1,
          borderWidth: 1,
          borderColor: '#cccccc',
        }}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
          <View style={{marginLeft: 5}}>
            <Text style={{color: textColor}}>Card Title eg.</Text>
            <Text style={{color: textColor}}>Thanks Nurses</Text>
            <Text style={{fontSize: 5, color: textColor}}>
              Personalized thank you message here
            </Text>
          </View>
        </View>

        <View style={{flexDirection: 'row', padding: 5}}>
          <Text style={{fontSize: 8, flex: 1, color: textColor}}>
            Closing Date/Signature #
          </Text>
          <Text style={{fontSize: 8, color: textColor}}>
            10 / 100 Signatures
          </Text>
        </View>
      </ImageBackground>
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
      <View style={{height: !!showColor ? 200 : 0}}></View>

      {!!showColor && (
        <>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              width: '100%',
              backgroundColor: 'white',
              zIndex: 111,
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
      <Text style={{marginTop: 10, fontWeight: 'bold'}}>Add Image</Text>
      <View style={{flexDirection: 'row', marginTop: 10}}>
        <RoundButton
          onPress={() =>
            launchImageLibrary({mediaType: 'photo'}, value => {
              console.log(value);
              const image = value?.assets;
              if (image) setSelectedImage(value?.assets[0]);
            })
          }
          customStyles={{width: 200, height: 30}}>
          <Text>Upload Image</Text>
        </RoundButton>
      </View>
      {!!selectedImage?.uri && (
        <View style={{flexDirection: 'row', marginTop: 10}}>
          <Icon
            name={'close'}
            size={16}
            onPress={() => setSelectedImage('')}
            style={{marginRight: 10}}
          />
          {
            <Text>
              image :{' '}
              {
                selectedImage.fileName.split('_')[
                  selectedImage.fileName.split('_').length - 1
                ]
              }
            </Text>
          }
        </View>
      )}
    </View>
  );
};

export default ViewBackground;
