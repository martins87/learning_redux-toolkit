import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

interface CounterState {
    count: number
}

const initialState: CounterState = {
    // Here we define the name of the attribute we're gonna use: 'count'
    count: 0
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => { state.count += 1 },
        decrement: state => { state.count -= 1 },
        // Actions will be correctly typed to accept a payload argument based on the PayloadAction<T>
        incrementByAmount: (state, action: PayloadAction<number>) => { state.count += action.payload }
    }
});

// Reducer's actions to be used
// Function createSlice sets all reducer's functions to be the attribute 'actions' of object counterSlice
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Functions can use the 'RootState' type
export const selectCount = (state: RootState) => state.counter.count;

// Same here: creates an attribute called 'reducer'
export default counterSlice.reducer;