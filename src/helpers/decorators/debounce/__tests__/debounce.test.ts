import { debounce } from '@helpers/decorators';

jest.useFakeTimers(); // Use Jest's fake timers

describe('debounce', () => {
    let mockFunction: jest.Mock;

    beforeEach(() => {
        jest.clearAllTimers();
        mockFunction = jest.fn();
    });

    it('should call the function after the specified delay', () => {
        const debouncedFunction = debounce(mockFunction, 1000); // Delay of 1000ms

        // Call the debounced function
        debouncedFunction('arg1', 'arg2');

        // Verify the function has not been called immediately
        expect(mockFunction).not.toHaveBeenCalled();

        // Fast-forward time by 1000ms
        jest.advanceTimersByTime(1000);

        // Now the function should have been called
        expect(mockFunction).toHaveBeenCalledTimes(1);
        expect(mockFunction).toHaveBeenCalledWith('arg1', 'arg2');
    });

    it('should reset the delay if called again within the delay period', () => {
        const debouncedFunction = debounce(mockFunction, 1000); // Delay of 1000ms

        // Call the debounced function multiple times within 1000ms
        debouncedFunction('first');
        jest.advanceTimersByTime(500); // Advance half of the time
        debouncedFunction('second'); // Call it again

        // Fast-forward time by the remaining 500ms (should not trigger the function yet)
        jest.advanceTimersByTime(500);
        expect(mockFunction).not.toHaveBeenCalled();

        // Fast-forward another 1000ms after the last call
        jest.advanceTimersByTime(1000);

        // Now the function should have been called once with the latest arguments
        expect(mockFunction).toHaveBeenCalledTimes(1);
        expect(mockFunction).toHaveBeenCalledWith('second');
    });

    it('should only call the function once after multiple rapid calls', () => {
        const debouncedFunction = debounce(mockFunction, 1000); // Delay of 1000ms

        // Call the debounced function multiple times
        debouncedFunction('call1');
        debouncedFunction('call2');
        debouncedFunction('call3');

        // Fast-forward time by 1000ms
        jest.advanceTimersByTime(1000);

        // The function should have been called only once, with the last set of arguments
        expect(mockFunction).toHaveBeenCalledTimes(1);
        expect(mockFunction).toHaveBeenCalledWith('call3');
    });

    it('should clear the previous timeout when called again', () => {
        const debouncedFunction = debounce(mockFunction, 1000); // Delay of 1000ms

        // Call the debounced function
        debouncedFunction('first');

        // Immediately call it again
        debouncedFunction('second');

        // Advance timers to simulate time passing
        jest.advanceTimersByTime(1000);

        // Function should have been called only once with the latest argument
        expect(mockFunction).toHaveBeenCalledTimes(1);
        expect(mockFunction).toHaveBeenCalledWith('second');
    });
});
