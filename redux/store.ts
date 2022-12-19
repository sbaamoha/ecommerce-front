import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./reducers/user";
export const store = configureStore({
  reducer: {
    userData: userSlice.reducer,
  },
});
import { combineReducers } from "@reduxjs/toolkit";
const rootReducer = combineReducers({});
export type RootState = ReturnType<typeof store.getState>;
