import { configureStore } from '@reduxjs/toolkit';

import counterReducer from './counterSlice';

export default configureStore({
    reducer: {
        // Here we define the name of the reducer: 'counter'
        counter: counterReducer
    }
});