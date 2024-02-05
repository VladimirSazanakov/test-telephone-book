import { createSlice } from "@reduxjs/toolkit";
import { appMode } from "../../../types_test/types";

type TState = {
  mode: appMode,
  editMode: boolean,
}

const initialState: TState = {
  mode: appMode.view,
  editMode: false,
}

export const appState = createSlice({
  name: 'appState',
  initialState,
  reducers: {
    setMode(state, action){
      state.mode = action.payload;
    },
    setEditMode(state, action){
      state.editMode = action.payload;
    }
  }
});

export const {setMode, setEditMode} = appState.actions;

export default appState.reducer;