"use client";

import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "@/types/user";

export const EmptyUser = {
   details: {
      name: "",
      email: "",
      image: "",
      id: "",
   },
   init: true,
};

const initialState: UserState = EmptyUser;

export const userSlice = createSlice({
   name: "user",
   initialState,
   reducers: {
      setUser: (state, action: PayloadAction<UserState>) => {
         console.log("---action payload");
         console.log(action.payload);
         state.details = action.payload;
      },
      clearUser: (state) => {
         state.details = EmptyUser.details;
      },
   },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
