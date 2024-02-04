import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: 'view'
}

export const appState = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setMode(state, action){
      console.log(action.payload);
      console.log(state);
      state.mode = action.payload;
    }
  }
});

export const {setMode} = appState.actions;

export default appState.reducer;