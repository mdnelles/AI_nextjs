import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AppState } from "../store";
import { HYDRATE } from "next-redux-wrapper";
import { Prompt } from "types/prompt";

// Type for our state

//interface PromptState extends Array<typeof PromptObj> {}
type PromptState = {
   arr: Prompt[];
};

// Initial state
const initialState: PromptState = {
   arr: [],
};

// Actual Slice
export const promptSlice = createSlice({
   name: "prompt",
   initialState,
   reducers: {
      // Action to set the promptentication status
      setPromptState(state, action: PayloadAction<Prompt[] | null>) {
         state.arr = action.payload || [];
      },
   },

   // Special reducer for hydrating the state. Special case for next-redux-wrapper
   extraReducers: {
      [HYDRATE]: (state, action) => {
         return {
            ...state,
            ...action.payload.prompt,
         };
      },
   },
});

export const { setPromptState } = promptSlice.actions;

export const selectPromptState = (state: AppState) => state.prompt;

export default promptSlice.reducer;
