import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../Screens/HomeScreen';
import DrawerContent from '../components/DrawerContent';

const Drawer = createDrawerNavigator();

function Navigator() {

    return (
        <NavigationContainer>
             <Drawer.Navigator
                drawerPosition='left'
                drawerType='front'
                drawerContent={()=><DrawerContent/>}
                initialRouteName="Home">
                <Drawer.Screen
                    options={{ headerShown: false }}
                    name="Home"
                    component={HomeScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;