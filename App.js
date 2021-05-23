import React, {useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import RNLocation from 'react-native-location';
import Navigator from './Navigators';

// RNLocation.configure({
//   distanceFilter: null
//  })

const App = () => {
  useEffect(() => {
    (async () => {
      let permission = await RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'coarse',
          rationale: {
            title: 'We need to access your location',
            message: 'We use your location to show where you are on the map',
            buttonPositive: 'OK',
            buttonNegative: 'Cancel',
          },
        },
      });
      console.log(permission);
      let location = await RNLocation.getLatestLocation({timeout: 100});
      console.log(
        location,
 
      );
    })();
  }, []);
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
});

export default App;
