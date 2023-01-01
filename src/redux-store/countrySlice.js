import {createSlice} from '@reduxjs/toolkit';

const initialState = [];

const componentSlice = createSlice({
    name: "countryComponent",
    initialState,
    reducers: {
        getItem(state, action) {
            // const item = action.payload;
            // eslint-disable-next-line
            if(state.length = 0){
                state = [];
                state.push(action.payload);
            } else {
                state.push(action.payload);
            }
        }
        
    }
})


export const {getItem} = componentSlice.actions;
export default componentSlice.reducer;