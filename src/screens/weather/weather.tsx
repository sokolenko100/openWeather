import { IWeatherData } from '@interfaces/weather';
import { RouteProp } from '@react-navigation/native';
import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';

type IRouteParams = {
    city: string;
    weatherData: IWeatherData;
};
type RootStackParamList = {
    Weather: IRouteParams;
};

type DetailsScreenRouteProp = RouteProp<RootStackParamList, 'Weather'>;

interface Props {
    route: DetailsScreenRouteProp;
}

export const Weather: FC<Props> = ({ route }): JSX.Element => {
    const { city, weatherData } = route.params;

    return (
        <View style={styles.container}>
            {weatherData && city ? (
                <>
                    <Text style={styles.title}>Weather in {city}:</Text>
                    <Text style={styles.text}>Temperature: {weatherData.main.temp}°C</Text>
                    <Text style={styles.text}>Feels Like: {weatherData.main.feels_like}°C</Text>
                    <Text style={styles.text}>Humidity: {weatherData.main.humidity}%</Text>
                    <Text style={styles.text}>Pressure: {weatherData.main.pressure} hPa</Text>
                    <Text style={styles.text}>
                        Clouds: {weatherData.clouds.all}% ({weatherData.weather[0].description})
                    </Text>
                    <Text style={styles.text}>Wind Speed: {weatherData.wind.speed} m/s</Text>
                </>
            ) : null}
        </View>
    );
};
