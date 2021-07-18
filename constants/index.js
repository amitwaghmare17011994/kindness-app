import {Dimensions} from 'react-native';

export const SCREEN_HEIGHT = Dimensions.get('window').height;

export const SCREEN_WIDTH = Dimensions.get('window').width;

export const MENU_ITEMS = [
  {name: 'MISSION & VISION', route: 'OurMissionScreen'},
  {name: 'LEARN MORE', route: 'LearnMoreScreen'},
  {name: 'TEAM & SPONSORS', route: 'TeamScreen'},
  {name: 'MAGAZINE', route: 'MagzineScreen'},
  {name: 'NOTIFICATIONS'},
  {name: 'PROFILE', route: 'ProfileScreen'},
  {name: 'HELP CENTER'},
];


export const END_POINT='http://192.168.1.110:5000/'