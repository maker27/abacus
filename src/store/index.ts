import { configureStore } from '@reduxjs/toolkit';

import abacusReducer from './abacusSlice';

const store = configureStore({
    reducer: {
        abacus: abacusReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
