import { RootNavigator } from '@navigation/root-navigator';
import React, { FC, useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';

const App: FC = (): JSX.Element => {
    useEffect(() => {
        setTimeout(() => {
            SplashScreen.hide();
        }, 1500);
    }, []);

    return (
        <SafeAreaProvider>
            <RootNavigator />
        </SafeAreaProvider>
    );
};

export default App;
