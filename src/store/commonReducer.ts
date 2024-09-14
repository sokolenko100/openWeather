import {combineReducers} from '@reduxjs/toolkit';

// use name 'common' in rootReducer
export const commonReducer = combineReducers({
  newText: () => {},
});

export type CommonState = ReturnType<typeof commonReducer>;
