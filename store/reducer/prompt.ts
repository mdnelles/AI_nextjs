import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Prompt, PromptState } from "@/types/prompt";

const initialState: PromptState = {
   arr: [],
   init: true,
};

export const promptSlice = createSlice({
   name: "prompts",
   initialState,
   reducers: {
      setPrompts: (state, action: PayloadAction<Prompt[]>) => {
         state.arr = action.payload;
      },
      addPrompt: (state, action: PayloadAction<Prompt>) => {
         state.arr.push(action.payload);
      },
      removePrompt: (state, action: PayloadAction<string>) => {
         const promptId = action.payload;
         state.arr = state.arr.filter((prompt) => prompt._id !== promptId);
      },
      clearPrompts: (state) => {
         state.arr = [];
      },
   },
});

export const { setPrompts, addPrompt, removePrompt, clearPrompts } =
   promptSlice.actions;

export default promptSlice.reducer;
