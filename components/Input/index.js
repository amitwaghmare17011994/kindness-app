import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {Input, Textarea} from 'native-base';

const InputField = props => {
  const {placeholder, customStyles = {}} = props;
  return (
    <Input
      style={{...styles.textArea, ...customStyles}}
      placeholderTextColor={'black'}
      {...props}
    />
  );
};

export const styles = StyleSheet.create({
  textArea: {
    backgroundColor: 'white',
    borderRadius: 1,
    marginRight: 5,
    flex: 1,
    borderWidth: 0.3,
  },
  placeholderStyle: {
    textAlignVertical: 'center',
    textDecorationColor: 'red',
    fontSize: 10,
  },
});

export default InputField;
