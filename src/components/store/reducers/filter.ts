import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: ''
}

export const filter = createSlice({
  name: 'filter',
  initialState,
  reducers:{
    setFilter(state, action){
      state.value = action.payload;
    }
  }
})
export const {setFilter} = filter.actions;

export default filter.reducer;