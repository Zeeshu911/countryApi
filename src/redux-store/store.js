import {configureStore} from '@reduxjs/toolkit';
import countryReducer from './countrySlice';

const store = configureStore({
    reducer: {
        countryComponent: countryReducer,
    }
})

export default store;