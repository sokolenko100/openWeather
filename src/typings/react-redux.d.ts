import { RootState } from '@/redux/config/store';

declare module 'react-redux' {
    export interface DefaultRootState extends RootState {
        someProperty: string;
    }
}
