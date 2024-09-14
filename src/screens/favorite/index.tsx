import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

export const Favorite = (): JSX.Element => {
  const [favoriteCity, setFavoriteCity] = useState('');

  useEffect(() => {
    const getFavoriteCity = async () => {
      const city = await AsyncStorage.getItem('favoriteCity');
      if (city) {
        setFavoriteCity(city);
      }
    };
    getFavoriteCity();
  }, []);

  return (
    <View>
      <Text>Your favorite city is: {favoriteCity}</Text>
    </View>
  );
};
