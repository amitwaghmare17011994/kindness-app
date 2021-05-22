import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Container = props => {
  return <View style={styles.container}>{props.children}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});
export default Container;
