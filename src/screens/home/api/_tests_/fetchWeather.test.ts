import { IWeatherData } from '@interfaces/weather';
import axios from 'axios';
import { fetchWeatherData } from '../fetchWeather';

describe('fetchWeatherData', () => {
    it('should return correct weather data for a valid city name', async () => {
        // Modified test data
        const mockResponse: IWeatherData = {
            coord: { lon: 139.7518, lat: 35.6895 },
            weather: [{ id: 800, main: 'Clear', description: 'sky is clear', icon: '01n' }],
            base: 'stations',
            main: {
                temp: 285.15,
                feels_like: 284.15,
                temp_min: 284.15,
                temp_max: 286.15,
                pressure: 1014,
                humidity: 47,
            },
            visibility: 10000,
            wind: { speed: 2.6, deg: 200, gust: 5.4 },
            clouds: { all: 0 },
            dt: 1623735600,
            sys: {
                type: 1,
                id: 1000,
                country: 'JP',
                sunrise: 1623705600,
                sunset: 1623762000,
            },
            timezone: 32400,
            id: 1851528,
            name: 'Tokyo',
            cod: 200,
        };

        jest.spyOn(axios, 'get').mockResolvedValueOnce({ data: mockResponse });

        // Modified test code
        const weatherData = await fetchWeatherData('Tokyo');

        expect(weatherData).toEqual(mockResponse);
    });

    it('should return null when the input is an empty string', async () => {
        const result = await fetchWeatherData('');
        expect(result).toBeNull();
    });
});
