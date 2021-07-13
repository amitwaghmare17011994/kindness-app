import React, {useEffect, useState} from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import {Radio} from 'native-base';
import {View, Text, Image} from 'react-native';
import DesignImage from '../../assets/images/design.png';
import SolidBackground from './DisgnInfoComponents/SolidBackground';
import BackgroundImage from './DisgnInfoComponents/BackgroundImage';
import ViewBackground from './DisgnInfoComponents/ViewBackground';
import BackgroundAndImage from './DisgnInfoComponents/BackgroundAndImage';
import {addUpdatePostMetaAction} from './../../hooks/useCreatePost';
import InputField from '../../components/Input';
import {updateRawData} from '../../Reducers/actions';

export const CARD_TYPE = {
  solidBG: 'Solid Background Colour',
  bgColorOverImg: 'Backgroung Colour and Overlay Image',
  bgImage: 'Background Image',
  bgImgOverImg: 'Background Image and Overlay Image',
};

const DesignInfo = ({useCreatePostProps}) => {
  const {state: values, dispatch} = useCreatePostProps;

  const cardType = values.postMeta.card_template;

  useEffect(() => {
    if (!cardType) {
      updateRawData({disableNext: true});
    }
  }, [cardType]);

  const updateType = card_template => {
    updateRawData({disableNext: false});
    addUpdatePostMetaAction(dispatch, {card_template});
  };

  return (
    <View>
      <Text style={{color: '#357B7F'}}>2 Design</Text>
      <Text style={{fontWeight: 'bold', marginTop: 10}}>
        Select Card Template
      </Text>
      <View style={{zIndex: 1}}>
        {/* First */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'flex-start',
          }}>
          <View
            style={{flexDirection: 'row', width: '45%'}}
            onTouchEnd={() => updateType(CARD_TYPE.solidBG)}>
            <Radio
              selected={cardType === CARD_TYPE.solidBG}
              color={'black'}
              selectedColor={'#357B7F'}
            />
            <Text style={{marginLeft: 5, fontWeight: '400'}}>
              Solid Background Colour
            </Text>
          </View>
          <View style={{width: '55%'}}>
            <SolidBgColor />
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
            style={{flexDirection: 'row', width: '45%'}}
            onTouchEnd={() => updateType(CARD_TYPE.bgColorOverImg)}>
            <Radio
              selected={cardType === CARD_TYPE.bgColorOverImg}
              color={'black'}
              selectedColor={'#357B7F'}
            />
            <Text style={{marginLeft: 5, fontWeight: '400'}}>
              Background Colour and Overlay Image
            </Text>
          </View>
          <View style={{width: '55%'}}>
            <BGColorOverlayImg />
          </View>
        </View>
        {/* Sec */}

        {/* Third */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            alignItems: 'flex-start',
          }}>
          <View
            style={{flexDirection: 'row', width: '45%'}}
            onTouchEnd={() => updateType(CARD_TYPE.bgImage)}>
            <Radio
              selected={cardType === CARD_TYPE.bgImage}
              color={'black'}
              selectedColor={'#357B7F'}
            />

            <Text style={{marginLeft: 5, fontWeight: '400'}}>
              Background Image
            </Text>
          </View>
          <View style={{width: '55%'}}>
            <BgImage />
          </View>
        </View>
        {/* Third */}

        {/* Fourth */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 10,
            marginBottom: 10,
            alignItems: 'flex-start',
          }}>
          <View
            style={{flexDirection: 'row', width: '45%'}}
            onTouchEnd={() => updateType(CARD_TYPE.bgImgOverImg)}>
            <Radio
              selected={cardType === CARD_TYPE.bgImgOverImg}
              color={'black'}
              selectedColor={'#357B7F'}
            />
            <Text style={{marginLeft: 5, fontWeight: '400'}}>
              Background Image and Overlay Image
            </Text>
          </View>
          <View style={{width: '55%'}}>
            <BGImageAndOverlayImg />
          </View>
        </View>
        {/* Fourth */}

        <RenderCard
          cardType={cardType}
          useCreatePostProps={useCreatePostProps}
        />
      </View>
    </View>
  );
};

export default DesignInfo;

export const RenderCard = ({cardType, ...props}) => {
  switch (cardType) {
    case CARD_TYPE.solidBG:
      return <SolidBackground {...props} />;
    case CARD_TYPE.bgColorOverImg:
      return <BackgroundImage {...props} />;
    case CARD_TYPE.bgImage:
      return <ViewBackground {...props} />;
    case CARD_TYPE.bgImgOverImg:
      return <BackgroundAndImage {...props} />;
    default:
      return null;
  }
};

export const SolidBgColor = ({
  main_header = 'Card Title eg. Thanks Nurses',
  message = 'Personalized thank you message here',
  font_colour = '#000',
  card_colour = '#ffcc4c',
}) => {
  return (
    <View
      style={{
        backgroundColor: card_colour,
        height: 100,
        flex: 1,
        elevation: 2,
      }}>
      <View style={{alignItems: 'center', flex: 1}}>
        <Text style={{color: font_colour}}>{main_header}</Text>
        <Text style={{color: font_colour, fontSize: 8}}>{message}</Text>
      </View>
      <View style={{flexDirection: 'row', padding: 5}}>
        <Text style={{color: font_colour, fontSize: 8, flex: 1}}>
          Closing Date/Signature #
        </Text>
        <Text style={{color: font_colour, fontSize: 8}}>
          10 / 100 Signatures
        </Text>
      </View>
    </View>
  );
};

export const BGColorOverlayImg = ({
  main_header = 'Card Title eg. Thanks Nurses',
  message = 'Personalized thank you message here',
  font_colour = '#000',
  card_colour = '#ffcc4c',
  image = DesignImage,
}) => {
  return (
    <View
      style={{
        backgroundColor: card_colour,
        height: 100,
        flex: 1,
        elevation: 7,
      }}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image source={image} style={{width: '30%', height: 50, margin: 5}} />
        <View style={{paddingLeft: 5, width: '70%', flexWrap: 'nowrap'}}>
          <Text style={{color: font_colour}}>{main_header}</Text>
          <Text style={{color: font_colour, fontSize: 8}}>{message}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', padding: 5}}>
        <Text style={{fontSize: 8, flex: 1}}>Closing Date/Signature #</Text>
        <Text style={{fontSize: 8}}>10 / 100 Signatures</Text>
      </View>
    </View>
  );
};

export const BgImage = ({
  main_header = 'Card Title eg. Thanks Nurses',
  message = 'Personalized thank you message here',
  font_colour = '#000',
  image,
}) => {
  return (
    <ImageBackground
      source={{uri: (image && image.uri) || null}}
      style={{
        height: 100,
        elevation: 1,
        borderWidth: 1,
        borderColor: '#cccccc',
      }}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{marginLeft: 5}}>
          <View style={{paddingLeft: 5, width: '70%', flexWrap: 'nowrap'}}>
            <Text style={{color: font_colour}}>{main_header}</Text>
            <Text style={{color: font_colour, fontSize: 8}}>{message}</Text>
          </View>
        </View>
      </View>
      <View style={{flexDirection: 'row', padding: 5}}>
        <Text style={{fontSize: 8, flex: 1}}>Closing Date/Signature #</Text>
        <Text style={{fontSize: 8}}>10 / 100 Signatures</Text>
      </View>
    </ImageBackground>
  );
};

export const BGImageAndOverlayImg = ({
  main_header = 'Card Title eg. Thanks Nurses',
  message = 'Personalized thank you message here',
  font_colour = '#000',
  image = DesignImage,
  bgImage,
}) => {
  return (
    <ImageBackground
      source={(bgImage && bgImage.uri) || null}
      style={{
        height: 100,
        elevation: 1,
        borderWidth: 1,
        borderColor: '#cccccc',
      }}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image source={image} style={{width: '30%', height: 50, margin: 5}} />
        <View style={{paddingLeft: 5, width: '70%', flexWrap: 'nowrap'}}>
          <Text style={{color: font_colour}}>{main_header}</Text>
          <Text style={{color: font_colour, fontSize: 8}}>{message}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', padding: 5}}>
        <Text style={{fontSize: 10, flex: 1}}>Closing Date/Signature #</Text>
        <Text style={{fontSize: 10}}>10 / 100 Signatures</Text>
      </View>
    </ImageBackground>
  );
};

export const BisooTextDetails = ({useCreatePostProps}) => {
  const {state, dispatch} = useCreatePostProps;
  const updateMeta = payload => addUpdatePostMetaAction(dispatch, payload);
  const values = state.postMeta;

  return (
    <View>
      <Text style={testStyle.inputLabel}>Main Header</Text>
      <InputField
        onChangeText={main_header => updateMeta({main_header})}
        value={values.main_header}
        customStyles={testStyle.input}
      />
      <Text style={testStyle.inputLabel}>Message</Text>
      <InputField
        onChangeText={message => updateMeta({message})}
        value={values.message}
        customStyles={testStyle.input}
      />
    </View>
  );
};


export const RenderCardToShow = ({card_template, ...props}) => {
  switch (card_template) {
    case CARD_TYPE.solidBG:
      return <SolidBgColor {...props} />;
    case CARD_TYPE.bgColorOverImg:
      return <BGImageAndOverlayImg {...props} />;
    case CARD_TYPE.bgImage:
      return <BgImage {...props} />;
    case CARD_TYPE.bgImgOverImg:
      return <BGImageAndOverlayImg {...props} />;
    default:
      return null;
  }
};

const testStyle = StyleSheet.create({
  inputLabel: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  input: {
    height: 40,
    fontSize: 15,
  },
});
