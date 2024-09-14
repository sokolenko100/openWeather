import store from '@store/config/store';
import type { FC, ReactNode } from 'react';
import React from 'react';
import { Provider } from 'react-redux';

interface IProps {
    children?: ReactNode;
}

export const AppStoreProvider: FC<IProps> = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
};

export default AppStoreProvider;
