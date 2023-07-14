import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { promptSlice } from "./reducer/prompt";
import { createWrapper } from "next-redux-wrapper";
import { userSlice } from "./reducer/user";

const makeStore = () =>
   configureStore({
      reducer: {
         prompts: promptSlice.reducer,
         user: userSlice.reducer,
      },
      devTools: true,
   });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
   ReturnType,
   AppState,
   unknown,
   Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
