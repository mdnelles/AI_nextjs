"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";
import { Session } from "next-auth";

interface ProviderProps {
   children: Element[] | ReactNode | any;
   session?: Session | null | any;
}

const Provider = ({ children, session }: ProviderProps) => (
   <SessionProvider session={session}>{children}</SessionProvider>
);

export default Provider;
