import React, {useState} from 'react';
import {Radio} from 'native-base';
import {View, Text, Image} from 'react-native';
import DesignImage from '../../assets/images/design.png';
import SolidBackground from './DisgnInfoComponents/SolidBackground';
import BackgroundImage from './DisgnInfoComponents/BackgroundImage';
import ViewBackground from './DisgnInfoComponents/ViewBackground';
import BackgroundAndImage from './DisgnInfoComponents/BackgroundAndImage';
import {addUpdatePostMetaAction} from './../../hooks/useCreatePost';

export const CARD_TYPE = {
  solidBG: 'Solid Background Colour',
  bgColorOverImg: 'Backgroung Colour and Overlay Image',
  bgImage: 'Background Image',
  bgImgOverImg: 'Background Image and Overlay Image',
};

const DesignInfo = ({useCreatePostProps}) => {
  const {state: values, dispatch, status, addUpdatePost} = useCreatePostProps;

  const cardType = values.postMeta.card_template;
  const updateType = card_template =>
    addUpdatePostMetaAction(dispatch, {card_template});
  return (
    <View>
      <Text style={{color: '#357B7F'}}>2 Design</Text>
      <Text style={{fontWeight: 'bold', marginTop: 10}}>
        Select Card Template
      </Text>

      {/* First */}
      <View
        style={{flexDirection: 'row', marginTop: 10, alignItems: 'flex-start'}}>
        <View
          style={{flexDirection: 'row', flex: 0.6}}
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
        <SolidBgColor />
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
        <BGColorOverlayImg />
      </View>
      {/* Sec */}

      {/* Third */}
      <View
        style={{flexDirection: 'row', marginTop: 10, alignItems: 'flex-start'}}>
        <View
          style={{flexDirection: 'row', flex: 0.6}}
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
        <BgImage />
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
          style={{flexDirection: 'row', flex: 0.6}}
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
        <BGImageAndOverlayImg />
      </View>
      {/* Fourth */}

      <RenderCard cardType={cardType}/>
    </View>
  );
};

export default DesignInfo;

export const RenderCard = ({cardType}) => {
  switch (cardType) {
    case CARD_TYPE.solidBG:
      return <SolidBackground />;
    case CARD_TYPE.bgColorOverImg:
      return <BackgroundImage />;
    case CARD_TYPE.bgImage:
      return <ViewBackground />;
    case CARD_TYPE.bgImgOverImg:
      return <BackgroundAndImage />;
    default:
      return null;
  }
};

export const SolidBgColor = ({name = '', content = ''}) => {
  return (
    <View
      style={{
        backgroundColor: '#ffcc4c',
        height: 80,
        flex: 1,
        marginLeft: 40,
        elevation: 4,
      }}>
      <View style={{alignItems: 'center', flex: 1}}>
        <Text>{name}</Text>
        <Text style={{fontSize: 8}}>{content}</Text>
      </View>
      <View style={{flexDirection: 'row', padding: 5}}>
        <Text style={{fontSize: 8, flex: 1}}>Closing Date/Signature #</Text>
        <Text style={{fontSize: 8}}>10 / 100 Signatures</Text>
      </View>
    </View>
  );
};

export const BGColorOverlayImg = () => {
  return (
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
          <Text style={{fontSize: 5}}>Personalized thank you message here</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', padding: 5}}>
        <Text style={{fontSize: 8, flex: 1}}>Closing Date/Signature #</Text>
        <Text style={{fontSize: 8}}>10 / 100 Signatures</Text>
      </View>
    </View>
  );
};

export const BgImage = () => {
  return (
    <View
      style={{
        elevation: 1,
        height: 80,
        flex: 1,
        borderWidth: 1,
        borderColor: '#cccccc',
        padding: 5,

        marginLeft: 40,
      }}>
      <View style={{flex: 1, alignItems: 'center'}}>
        <View style={{marginLeft: 5}}>
          <Text>Card Title eg.</Text>
          <Text>Thanks Nurses</Text>
          <Text style={{fontSize: 5}}>Personalized thank you message here</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', padding: 5}}>
        <Text style={{fontSize: 8, flex: 1}}>Closing Date/Signature #</Text>
        <Text style={{fontSize: 8}}>10 / 100 Signatures</Text>
      </View>
    </View>
  );
};

export const BGImageAndOverlayImg = () => {
  return (
    <View
      style={{
        // backgroundColor: '#ffcc4c',
        height: 80,
        flex: 1,
        elevation: 1,
        marginLeft: 40,
        padding: 5,
        borderWidth: 1,
        borderColor: '#cccccc',
      }}>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <Image
          source={DesignImage}
          style={{width: 50, height: 50, margin: 5}}
        />
        <View style={{marginLeft: 5}}>
          <Text>Card Title eg.</Text>
          <Text>Thanks Nurses</Text>
          <Text style={{fontSize: 5}}>Personalized thank you message here</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', padding: 5}}>
        <Text style={{fontSize: 8, flex: 1}}>Closing Date/Signature #</Text>
        <Text style={{fontSize: 8}}>10 / 100 Signatures</Text>
      </View>
    </View>
  );
};
