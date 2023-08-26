import { combineReducers, configureStore } from "@reduxjs/toolkit";
import mainReducer from "./main-reducer";

const rootReducer = combineReducers({
  mainReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});
