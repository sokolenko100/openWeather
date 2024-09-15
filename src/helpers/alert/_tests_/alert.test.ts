import { showPrompt } from '@helpers/alert';
import { Alert } from 'react-native';

jest.mock('react-native', () => ({
    Alert: {
        alert: jest.fn(),
    },
}));

describe('showPrompt', () => {
    const mockParams = {
        title: 'Save City',
        message: 'Do you want to save the name of the city?',
        value: 'New York',
        okBtnTxt: 'Yes',
        cancelBtnTxt: 'No',
        onOk: jest.fn(),
        onCancel: jest.fn(),
    };

    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should display an alert with the correct title and message', () => {
        showPrompt(mockParams);

        expect(Alert.alert).toHaveBeenCalledWith('Save City', 'Do you want to save the name of the city?', [
            {
                text: 'No',
                onPress: expect.any(Function), // Verify that a function is attached
            },
            {
                text: 'Yes',
                onPress: expect.any(Function), // Verify that a function is attached
            },
        ]);
    });

    it('should call onOk callback with value when "Yes" is pressed', () => {
        showPrompt(mockParams);

        // Simulate pressing the "Yes" button
        const okButton = (Alert.alert as jest.Mock).mock.calls[0][2][1]; // Second button
        okButton.onPress();

        expect(mockParams.onOk).toHaveBeenCalledWith('New York');
    });

    it('should call onCancel callback when "No" is pressed', () => {
        showPrompt(mockParams);

        // Simulate pressing the "No" button
        const cancelButton = (Alert.alert as jest.Mock).mock.calls[0][2][0]; // First button
        cancelButton.onPress();

        expect(mockParams.onCancel).toHaveBeenCalled();
    });

    it('should not fail if onCancel is not provided', () => {
        const paramsWithoutCancel = { ...mockParams, onCancel: undefined };
        showPrompt(paramsWithoutCancel);

        // Simulate pressing the "No" button
        const cancelButton = (Alert.alert as jest.Mock).mock.calls[0][2][0];
        expect(() => cancelButton.onPress()).not.toThrow();
    });

    it('should not fail if onOk is not provided', () => {
        const paramsWithoutOk = { ...mockParams, onOk: undefined };
        showPrompt(paramsWithoutOk);

        // Simulate pressing the "Yes" button
        const okButton = (Alert.alert as jest.Mock).mock.calls[0][2][1];
        expect(() => okButton.onPress()).not.toThrow();
    });
});
