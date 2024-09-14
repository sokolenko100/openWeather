import { all, AllEffect } from 'redux-saga/effects';

export function* SagaManager(): Generator<AllEffect<any>> {
    yield all([]);
}
