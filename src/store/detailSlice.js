import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    type: 'square',
    width: 0,
    height: 0,
    quantity: 0,
    sizeOccupied: 0,
}


const detailSlice = createSlice({
    name: 'details',
    initialState,
    reducers: {
        addSettings(state, action) {
            return {
                ...state,
                ...action.payload,

            };
        },
        
    }
})

export const {addSettings} = detailSlice.actions;
export default detailSlice.reducer;