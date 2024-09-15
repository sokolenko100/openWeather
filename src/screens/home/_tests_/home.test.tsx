import { showPrompt } from '@helpers/alert';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { act, fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';
import { fetchWeatherData } from '../api';
import { Home } from '../home';

// Mock dependencies
jest.mock('@react-native-async-storage/async-storage', () => ({
    setItem: jest.fn(),
    getItem: jest.fn(),
}));
jest.mock('@react-navigation/native', () => ({
    useNavigation: jest.fn(),
}));
jest.mock('../api', () => ({
    fetchWeatherData: jest.fn(),
}));
jest.mock('@helpers/alert', () => ({
    showPrompt: jest.fn(),
}));

describe('Home Screen', () => {
    const mockedNavigate = jest.fn();

    beforeEach(() => {
        (useNavigation as jest.Mock).mockReturnValue({
            navigate: mockedNavigate,
        });
        jest.clearAllMocks();
    });

    it('fetches saved city from AsyncStorage on mount', async () => {
        AsyncStorage.getItem.mockResolvedValue('Paris');
        const { getByText } = render(<Home />);

        await waitFor(() => {
            expect(getByText('Saved City: Paris')).toBeTruthy();
        });
    });

    it('fetches weather data when a city name is typed', async () => {
        const weatherMockData = {
            weather: [{ description: 'cloudy' }],
            main: { temp: 20 },
        };
        (fetchWeatherData as jest.Mock).mockResolvedValueOnce(weatherMockData);

        const { getByPlaceholderText, getByText } = render(<Home />);
        const input = getByPlaceholderText('Type a city');

        await act(async () => {
            fireEvent.changeText(input, 'New York');
        });

        await waitFor(() => {
            expect(fetchWeatherData).toHaveBeenCalledWith('New York');
            expect(getByText('Weather in New York: cloudy')).toBeTruthy();
            expect(getByText('Temperature: 20')).toBeTruthy();
        });
    });

    it('shows error message if city is not found', async () => {
        (fetchWeatherData as jest.Mock).mockRejectedValueOnce(new Error('City not found'));

        const { getByPlaceholderText, getByText } = render(<Home />);
        const input = getByPlaceholderText('Type a city');

        await act(async () => {
            fireEvent.changeText(input, 'Unknown City');
        });

        await waitFor(() => {
            expect(getByText('City not found or error fetching weather data')).toBeTruthy();
        });
    });

    it('navigates to the weather details screen when weather data is available', async () => {
        const weatherMockData = {
            weather: [{ description: 'sunny' }],
            main: { temp: 25 },
        };
        (fetchWeatherData as jest.Mock).mockResolvedValueOnce(weatherMockData);

        const { getByTestId } = render(<Home />);
        const input = getByTestId('typeCityID');

        const goToWeatherButton = getByTestId('goToDescriptionID');

        fireEvent.changeText(input, 'Los Angeles');

        fireEvent.press(goToWeatherButton);

        await waitFor(() => {
            expect(mockedNavigate).toHaveBeenCalledWith('Weather', {
                city: 'Los Angeles',
                weatherData: weatherMockData,
            });
        });
    });

    it('saves the city name to AsyncStorage when user confirms prompt', async () => {
        showPrompt.mockImplementation(({ onOk }) => onOk('London'));
        const { getByText, getByPlaceholderText } = render(<Home />);
        const input = getByPlaceholderText('Type a city');
        const saveButton = getByText('Save the name of the city');

        await act(async () => {
            fireEvent.changeText(input, 'London');
        });

        fireEvent.press(saveButton);

        await waitFor(() => {
            expect(showPrompt).toHaveBeenCalledWith(
                expect.objectContaining({
                    cancelBtnTxt: 'No',
                    message: 'You can choose by default name without changing input field',
                    okBtnTxt: 'Yes',
                    title: 'Do you want to save the name of the city?',
                    value: 'Paris',
                }),
            );
            expect(AsyncStorage.setItem).toHaveBeenCalledWith('city', 'London');
            expect(getByText('Saved City: London')).toBeTruthy();
        });
    });

    it('displays "No city saved yet" when no city is saved in AsyncStorage', async () => {
        AsyncStorage.getItem.mockResolvedValue(null);
        const { getByText } = render(<Home />);

        await waitFor(() => {
            expect(getByText('No city saved yet.')).toBeTruthy();
        });
    });
});
