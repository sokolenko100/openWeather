import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, Weather } from '@screens/index';
import React from 'react';

const Stack = createStackNavigator();

export const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Home.name}>
                <Stack.Screen name={Home.name} component={Home} />
                <Stack.Screen name={Weather.name} component={Weather} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
