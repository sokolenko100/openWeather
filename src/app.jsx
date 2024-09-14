import { isAndroid } from '@constants/platforms';
import { RootNavigator } from '@navigation/root-navigator';
import i18n from 'i18next';
import { useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
    useEffect(() => {
        setTimeout(
            () => {
                SplashScreen.hide();
            },
            isAndroid ? 1500 : 0,
        );
    }, []);

    return (
        <SafeAreaProvider>
            <I18nextProvider i18n={i18n}>
                <RootNavigator />
            </I18nextProvider>
        </SafeAreaProvider>
    );
};

export default App;
