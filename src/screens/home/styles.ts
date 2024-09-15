import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
    weatherContainer: {
        paddingBottom: 30,
    },
    label: {
        fontSize: 18,
        marginBottom: 10,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        borderRadius: 4,
        paddingHorizontal: 10,
    },
    savedCity: {
        marginTop: 20,
        fontSize: 16,
        fontStyle: 'italic',
    },
    text: {
        fontWeight: '600',
    },
    error: {
        color: 'red',
        marginTop: 10,
    },
});
