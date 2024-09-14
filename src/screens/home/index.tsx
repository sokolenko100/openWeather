import {navigateTo} from '@helpers/navigation';
import React, {useState} from 'react';
import {Button, Text, TextInput, View} from 'react-native';

export const Home = (): JSX.Element => {
  const [city, setCity] = useState('');

  const handleCitySubmit = () => {
    if (city) {
      navigateTo('Weather', {city});
    }
  };

  return (
    <View>
      <Text>Enter City Name:</Text>
      <TextInput value={city} onChangeText={setCity} placeholder="Enter city" />
      <Button title="Get Weather" onPress={handleCitySubmit} />
    </View>
  );
};
