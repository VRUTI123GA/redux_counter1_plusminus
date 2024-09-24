import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './counter.jsx';

const store = configureStore({
    reducer: {  
        counter: CounterSlice.reducer,   
    },
})

export default store;