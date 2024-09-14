import { SagaIterator } from '@redux-saga/core';
import { put, takeLatest } from 'redux-saga/effects';
import TYPES from './actionTypes';
import { setNewText } from './reducer';

/**
 * Set text in saga
 */
export function* getMyTeamDataSaga(): SagaIterator {
    const text = 'This text was put in saga';
    yield put(setNewText(text));
}

export default [takeLatest(TYPES.SET_SPLASH_SCREEN_TEXT_IN_SAGA, getMyTeamDataSaga)];
