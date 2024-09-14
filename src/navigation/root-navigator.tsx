import {navigationRef} from '@helpers/navigation';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Favorite} from '@screens/favorite';
import {Home} from '@screens/home';
import Weather from '@screens/weather';
import React from 'react';

const Stack = createStackNavigator();

export const RootNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator initialRouteName={Home.name}>
        <Stack.Screen name={Home.name} component={Home} />
        <Stack.Screen name={Weather.name} component={Weather} />
        <Stack.Screen name={Favorite.name} component={Favorite} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
