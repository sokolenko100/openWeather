jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    const mockedNavigate = jest.fn();
    return {
        ...actualNav,
        useNavigation: () => ({
            navigate: mockedNavigate,
        }),
        useIsFocused: () => ({
            isFocused: true,
        }),
    };
});
