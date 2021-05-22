import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import PostScreen from '../Screens/PostScreen';

import PostLocationScreen from '../Screens/PostLocationScreen';
import OurMissionScreen from '../Screens/OurMissionScreen';
import LearnMoreScreen from '../Screens/LearnMore';

const Stack = createStackNavigator();
function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="PostKindness"
          component={PostScreen}
        />

        <Stack.Screen
          options={{headerShown: false}}
          name="PostLocationScreen"
          component={PostLocationScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="OurMissionScreen"
          component={OurMissionScreen}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="LearnMoreScreen"
          component={LearnMoreScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
