import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import AppLayout from '../../components/AppLayout';


const SubscribeScreen = () => {
  return (
    <AppLayout>
      <Text>Hii</Text>
    </AppLayout>
  );
};

const styles = StyleSheet.create({
  selectedTab: {
    borderBottomWidth: 3,
  },
  tab: {
    borderBottomWidth: 1,
    flex: 1,
    textAlign: 'center',
    fontSize: 12,
  },
  tabs: {
    flexDirection: 'row',
  },
  headerView: {
    backgroundColor: '#ED9678',
    height: 80,
    zIndex: 1,
  },
  avatar: {
    position: 'absolute',
    backgroundColor: '#D8D8D8',
    borderWidth: 1,
    borderColor: 'white',
    height: 80,
    width: 80,
    borderRadius: 50,
    zIndex: 15,
    justifyContent: 'center',
    marginTop: -20,
  },
});

export default SubscribeScreen;
