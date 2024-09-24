import {createSlice} from "@reduxjs/toolkit";
let CounterSlice = createSlice({
    name:"counter",
    initialState: {count: 0,
    },
    reducers: {
        
        resetCount(state) {
            // return state
            state.count = 0
        },
        decCount(state) {
            // return state - 1;
            state.count = state.count - 1
        },
        incCount(state) {
            // return state + 1;
            state.count = state.count + 1
        }
    }
});

export default CounterSlice;