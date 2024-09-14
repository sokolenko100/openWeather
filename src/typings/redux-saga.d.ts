import { RootState } from '@/redux/config/store';
import { SelectEffect, SelectEffectDescriptor as DefaultSelectEffectDescriptor, Tail } from '@redux-saga/core/effects';

declare module 'redux-saga/effects' {
    export interface SelectEffectDescriptor extends DefaultSelectEffectDescriptor {
        selector(state: RootState, ...args: any[]): any;
    }

    export function select<Fn extends (state: RootState, ...args: any[]) => ReturnType<Fn>>(
        selector: Fn,
        ...args: Tail<Parameters<Fn>>
    ): SelectEffect;
}
