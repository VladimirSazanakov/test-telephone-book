import {combineReducers, configureStore} from '@reduxjs/toolkit';
import phoneBook from './reducers/phoneBook';
import filter from './reducers/filter';
import sort from './reducers/sort';
import appState from './reducers/app';

const rootReducer = combineReducers({
  'phoneBook': phoneBook,
  'filter': filter,
  'sort':sort,
  'mode':appState,
});

export const setupStore = () =>{
  return configureStore({
    reducer: rootReducer
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];

