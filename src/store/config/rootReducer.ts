import type { PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import { commonReducer } from '@store/commonReducer';

const combinedReducer = combineReducers({
    common: commonReducer,
});

const rootReducer = (state: ReturnType<any>, action: PayloadAction<any>): any => {
    if (action.type === 'user/logout') {
        state = undefined;
    }
    return combinedReducer(state, action);
};

export default rootReducer;
