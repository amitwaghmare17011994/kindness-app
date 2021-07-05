import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  TransitionSpecs,
  HeaderStyleInterpolators,
} from '@react-navigation/stack';

import HomeScreen from '../Screens/HomeScreen';
import PostScreen from '../Screens/PostScreen';

import PostLocationScreen from '../Screens/PostLocationScreen';
import OurMissionScreen from '../Screens/OurMissionScreen';
import LearnMoreScreen from '../Screens/LearnMore';
import TeamScreen from '../Screens/TeamScreen';
import MagzineScreen from '../Screens/MagzineScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import BisooScreen from '../Screens/BisooScreen';
import PurchaseBisooScreen from '../Screens/PurchaseBisooScreen';
import SubscribeScreen from '../Screens/Subscribe';
import ColorChooser from '../Screens/ColorChooser';
import DonationScreen from '../Screens/Donation';
import CompleteDonation from '../Screens/Donation/CompleteDoation';
import CheckoutScreen from '../Screens/CheckoutScreen';

const MyTransition = {
  gestureDirection: 'horizontal',
  transitionSpec: {
    open: TransitionSpecs.TransitionIOSSpec,
    close: TransitionSpecs.TransitionIOSSpec,
  },
  headerStyleInterpolator: HeaderStyleInterpolators.forFade,
  cardStyleInterpolator: ({current, next, layouts}) => {
    return {
      cardStyle: {
        transform: [
          {
            translateX: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.width, 0],
            }),
          },

          {
            scale: next
              ? next.progress.interpolate({
                  inputRange: [0, 1],
                  outputRange: [1, 0.9],
                })
              : 1,
          },
        ],
      },
      overlayStyle: {
        opacity: current.progress.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 0.5],
        }),
      },
    };
  },
};
const Stack = createStackNavigator();
function Navigator() {
  return (
    <NavigationContainer>
      {/* <script source="http://localhost:8097"/> */}
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{headerShown: false, ...MyTransition}}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          options={{headerShown: false, ...MyTransition}}
          name="PostKindness"
          component={PostScreen}
        />

        <Stack.Screen
          options={{headerShown: false, ...MyTransition}}
          name="PostLocationScreen"
          component={PostLocationScreen}
        />
        <Stack.Screen
          options={{headerShown: false, ...MyTransition}}
          name="OurMissionScreen"
          component={OurMissionScreen}
        />
        <Stack.Screen
          options={{headerShown: false, ...MyTransition}}
          name="LearnMoreScreen"
          component={LearnMoreScreen}
        />
        <Stack.Screen
          options={{headerShown: false, ...MyTransition}}
          name="TeamScreen"
          component={TeamScreen}
        />
        <Stack.Screen
          options={{headerShown: false, ...MyTransition}}
          name="MagzineScreen"
          component={MagzineScreen}
        />
        <Stack.Screen
          options={{headerShown: false, ...MyTransition}}
          name="ProfileScreen"
          component={ProfileScreen}
        />

        <Stack.Screen
          options={{headerShown: false, ...MyTransition}}
          name="SubscribeScreen"
          component={SubscribeScreen}
        />
        <Stack.Screen
          options={{headerShown: false, ...MyTransition}}
          name="BisooScreen"
          component={BisooScreen}
        />

        <Stack.Screen
          options={{headerShown: false, ...MyTransition}}
          name="PurchaseBisooScreen"
          component={PurchaseBisooScreen}
        />
        <Stack.Screen
          options={{headerShown: false, ...MyTransition}}
          name="ColorChooser"
          component={ColorChooser}
        />
        <Stack.Screen
          options={{headerShown: false, ...MyTransition}}
          name="DonationScreen"
          component={DonationScreen}
        />
        <Stack.Screen
          options={{headerShown: false, ...MyTransition}}
          name="CheckoutScreen"
          component={CheckoutScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
