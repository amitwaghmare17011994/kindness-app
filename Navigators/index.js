import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';

const Stack = createStackNavigator();

function Navigator() {
    React.useEffect(() => {
        console.log('heee');
    }, [])
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{ headerShown: false }}
                    name="Home"
                    component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigator;