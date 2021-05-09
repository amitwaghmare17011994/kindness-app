

import React, { useState } from "react";
import { Text, Image, View, StyleSheet, Slider } from "react-native";
import Icon from 'react-native-vector-icons/Entypo'
import PushNotification from './PushNotification';
import Logo from './assets/images/logo.png'

const App = () => {


  return (
    <View style={styles.container}>
      <PushNotification />
      <View
        elevation={5}
        style={[
          styles.square,
        ]}
      >
        <View style={styles.headerRow}>
          <View style={{ flex: 1 }}>
            <Image
              source={Logo}
              style={styles.img}
              resizeMode="contain"
            />
          </View>
          <View style={{ alignItems: 'flex-end', marginRight: 20 }}>
            <Icon name="menu" size={40} color="#ffcb4c" />
            <View style={{ flexDirection: 'row', marginRight: 2 }}>
              <Text>Send a </Text>
              <Text>Bisoo</Text>
            </View>
          </View>
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  headerRow: { flexDirection: 'row', alignItems: 'center' },
  img: {
    height: 50, width: 100
  },
  menu: {
    marginRight: 20
  },
  square: {
    backgroundColor: "#f8f9f8",
    height: 120,
    shadowColor: "black",
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'

  },

});

export default App;