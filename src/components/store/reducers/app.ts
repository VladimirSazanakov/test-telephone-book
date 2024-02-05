import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: 'view',
  editMode: false,
}

export const appState = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setMode(state, action){
      // console.log(action.payload);
      // console.log(state);
      state.mode = action.payload;
    },
    setEditMode(state, action){
      state.editMode = action.payload;
    }
  }
});

export const {setMode, setEditMode} = appState.actions;

export default appState.reducer;