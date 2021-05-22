import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import AppFooter from '../AppFooter';
import AppHeader from '../AppHeader';
import {SCREEN_HEIGHT, MENU_ITEMS} from '../../constants';

const AppLayout = props => {
  const navigation = useNavigation();
  const onMenuItemSelected = item => {
    if (item.route) {
      navigation.navigate(item.route);
    }
  };

  return (
    <View style={{flex: 1}}>
      <View elevation={5} style={[styles.square]}>
        <AppHeader onMenuItemSelected={onMenuItemSelected} />
      </View>
      <ScrollView style={{flex: 1, maxHeight: SCREEN_HEIGHT}}>
        {props.children}
        <AppFooter />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecf0f1',
  },
  mainContainer: {
    flex: 1,
    minHeight: SCREEN_HEIGHT,
    height: 'auto',
  },

  square: {
    backgroundColor: '#f8f9f8',
    // height: 0,
    paddingBottom:10,
    paddingTop:30,
    shadowColor: 'black',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default AppLayout;
