import { WEATHER_API_KEY } from '@constants/common';
import { IWeatherData } from '@interfaces/weather';
import axios from 'axios';

export const fetchWeatherData = async (searchText: string): Promise<IWeatherData> => {
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${WEATHER_API_KEY}&units=metric`,
    );
    return response.data;
};
