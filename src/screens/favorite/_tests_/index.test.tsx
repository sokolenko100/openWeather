import mockAsyncStorage from '@test-mocks/@react-native-async-storage/async-storage';
import { render, waitFor } from '@testing-library/react-native';
import React from 'react';
import { Favorite } from '..';

jest.mock('@react-native-async-storage/async-storage');

describe('Favorite screen', () => {
    it('displays saved favorite city', async () => {
        const { getByText } = render(<Favorite />);

        await waitFor(() => {
            expect(mockAsyncStorage.getItem).toBeCalledTimes(1);
            expect(getByText('Your favorite city is: London')).toBeTruthy();
        });
    });
});
