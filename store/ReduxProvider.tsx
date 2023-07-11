"use client";

import React from "react";
import { Provider } from "react-redux";
import { dispatch, store } from ".";
import { Prompt } from "../types/prompt";
import { setPromptState } from "./reducer/prompt";

type Props = {
   prompt: Prompt | null | undefined;
   children: React.ReactNode;
};

const ReduxProvider: React.FC<Props> = ({ prompt, children }) => {
   dispatch(setPromptState(prompt));

   return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
