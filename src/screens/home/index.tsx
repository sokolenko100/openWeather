import { navigateTo } from '@helpers/navigation';
import React, { useState } from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export const Home = (): JSX.Element => {
    const [city, setCity] = useState('');

    const handleCitySubmit = () => {
        if (city) {
            navigateTo('Weather', { city });
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Enter City Name:</Text>
            <TextInput value={city} onChangeText={setCity} placeholder="Enter city" />
            <Button title="Get Weather" onPress={handleCitySubmit} />
        </View>
    );
};
