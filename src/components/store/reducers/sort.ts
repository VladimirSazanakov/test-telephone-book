import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 'name'
}

export const sort = createSlice({
  name: 'sorting',
  initialState,
  reducers: {
    setSort(state, action){
      state.value = action.payload;
    }
  }
});

export const {setSort} = sort.actions;

export default sort.reducer;