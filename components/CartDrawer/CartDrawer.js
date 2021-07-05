import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {SCREEN_HEIGHT, SCREEN_WIDTH} from '../../constants';

const CartDrawer = () => {
  const [show, setShow] = useState(false);

  const onToggle = () => {
    setShow(!show);
  };
  return (
    <View style={[styles.container, !show ? styles.close : {}]}>
      <View style={{flexDirection: 'row'}}>
        <Icon
          onPress={onToggle}
          name="shoppingcart"
          size={36}
          style={{
              backgroundColor:'white',
              borderRightWidth:0,
            height: 50,
            padding: 5,
            color: '#337A7F',
            borderWidth: 1,
            borderBottomLeftRadius: 12,
            borderColor: '#cccccc',
            shadowColor: 'black',
          }}
        />
        {show && (
          <View style={styles.drawer}>
            <Text>Card Details</Text>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  close: {
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row-reverse',
    position: 'absolute',
    right: 0,
    zIndex: 11,
    backgroundColor: '#000000aa',
    width: SCREEN_WIDTH,
    // marginTop:500
  },
  drawer: {
    width: SCREEN_WIDTH / 2,
    height: SCREEN_HEIGHT*2,
    backgroundColor: 'white',
  },
});

export default CartDrawer;
