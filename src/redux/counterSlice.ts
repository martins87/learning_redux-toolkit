import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
    name: 'batata',
    initialState: {
        // Here we define the name of the attribute we're gonna use: 'count'
        count: 0
    },
    reducers: {
        increment: state => { state.count += 1 },
        decrement: state => { state.count -= 1 },
        incrementByAmount: (state, action) => { state.count += action.payload }
    }
});

// Reducer's actions to be used
// Function createSlice sets all reducer's functions to be the attribute 'actions' of object counterSlice
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Same here: creates an attribute called 'reducer'
export default counterSlice.reducer;