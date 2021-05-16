

import React from "react";
import { View, StyleSheet } from "react-native";
import Navigator from "./Navigators";


const App = () => {
  return (
    <View style={styles.container}>
      <Navigator />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },

});

export default App;