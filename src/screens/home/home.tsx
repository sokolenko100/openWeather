import { showPrompt } from '@helpers/alert';
import { debounce } from '@helpers/decorators';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import React, { FC, useCallback, useEffect, useRef, useState } from 'react';
import { Alert, Button, Text, TextInput, View } from 'react-native';
import { fetchWeatherData } from './api';
import { styles } from './styles';

export const Home: FC = (): JSX.Element => {
    const [city, setCity] = useState<string>('');
    const [storedCity, setStoredCity] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [weatherData, setWeatherData] = useState<any>(null);
    const navigation = useNavigation();

    const saveCity = async (cityName: string) => {
        try {
            await AsyncStorage.setItem('city', cityName);
            setStoredCity(cityName);
            setCity(cityName);
            Alert.alert('City saved!');
        } catch (e) {
            console.error('Failed to save city.', e);
        }
    };

    const getWeatherData = useCallback(async searchText => {
        try {
            const weatherData = await fetchWeatherData(searchText);
            setWeatherData(weatherData);
            setError(null); // Clear any previous errors
            setCity(searchText);
        } catch (err) {
            setError('City not found or error fetching weather data');
        }
    }, []);

    const getCity = async () => {
        try {
            const savedCity = await AsyncStorage.getItem('city');
            if (savedCity !== null) {
                setStoredCity(savedCity);
                setCity(savedCity);
            }
        } catch (e) {
            console.error('Failed to fetch city.', e);
        }
    };

    const handleGoToWeatherDescriptionScreen = () => {
        if (weatherData && city) {
            /* @ts-ignore */
            navigation.navigate('Weather', { city, weatherData });
        }
    };

    const onChangeText = useRef(
        debounce((searchText: string) => {
            if (searchText) {
                getWeatherData(searchText);
            }
        }, 1500),
    ).current;

    const handleSaveCityName = () => {
        showPrompt({
            title: 'Do you want to save the name of the city?',
            message: 'You can choose by default name without changing input field',
            value: city,
            okBtnTxt: 'Yes',
            cancelBtnTxt: 'No',
            onOk: saveCity,
        });
    };

    // Load the city from AsyncStorage when the component mounts
    useEffect(() => {
        getCity();
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.weatherContainer}>
                {weatherData ? (
                    <>
                        <Text style={styles.text}>{`Weather in ${city}: ${weatherData.weather[0].description}`}</Text>
                        <Text style={styles.text}>Temperature: {weatherData.main.temp}</Text>
                    </>
                ) : null}
            </View>
            <Text style={styles.label}>Enter the name of a city:</Text>
            <TextInput testID="typeCityID" style={styles.input} placeholder="Type a city" onChangeText={onChangeText} />
            <Button
                testID="goToDescriptionID"
                disabled={!city}
                title="Go to description of the weather"
                onPress={handleGoToWeatherDescriptionScreen}
            />
            <Button disabled={!city} title="Save the name of the city" onPress={handleSaveCityName} />

            {storedCity ? (
                <Text style={styles.savedCity}>Saved City: {storedCity}</Text>
            ) : (
                <Text style={styles.savedCity}>No city saved yet.</Text>
            )}
            {error && <Text style={styles.error}>{error}</Text>}
        </View>
    );
};
