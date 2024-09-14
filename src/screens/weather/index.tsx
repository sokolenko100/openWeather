import {WEATHER_API_KEY} from '@constants/common';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {Button, Text, View} from 'react-native';

const Weather = ({route}) => {
  const {city} = route.params as {city: string};
  const [weatherData, setWeatherData] = useState<any>(null);
  console.log('city--->>>', city);
  console.log('weatherData--->>>', weatherData);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}`,
          // 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=3f071776be6f7ccd417bfb1da2910---',
          // `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_KEY}&units=metric`,
          // `http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=10&mode=json&units=metric&appid=${WEATHER_KEY}`,
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchWeather();
  }, [city]);

  const saveFavoriteCity = async () => {
    try {
      await AsyncStorage.setItem('favoriteCity', city);
      alert(`${city} saved as favorite!`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View>
      {weatherData ? (
        <View>
          <Text>Weather in {city}:</Text>
          <Text>{weatherData.weather[0].description}</Text>
          <Text>Temperature: {weatherData.main.temp}</Text>
          <Button title="Save as Favorite" onPress={saveFavoriteCity} />
        </View>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default Weather;
