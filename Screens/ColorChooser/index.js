import React, {useState,useEffect} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {ColorPicker, toHsv} from 'react-native-color-picker';

const ColorChooser = props => {
  const [color, setColor] = useState(toHsv('green'));
  useEffect(() => {
      setColor(props.color || 'green')
  }, [props.color])
  
  const onColorChange = color => {
    setColor(color);
   };

  return (
    <View style={{flex: 1, height: 200}}>
      <View style={{flexDirection: 'row-reverse'}}>
        <Icon onPress={props.onClose} name={'close'} size={20} />
      </View>

      <ColorPicker
        color={color}
        style={{flex: 1}}
        onColorChange={onColorChange}
        onColorSelected={color => props.onColorChangeHandler(color)}
      />
    </View>
  );
};

export default ColorChooser;
