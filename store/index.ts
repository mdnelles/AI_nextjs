import { configureStore } from "@reduxjs/toolkit";

import promptsReducer from "./reducer/prompt";
import userReducer from "./reducer/user";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
   reducer: {
      prompts: promptsReducer,
      user: userReducer,
   },
});

export const { dispatch, getState } = store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
