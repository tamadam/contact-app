"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "./ThemeContext";

const ThemeContextWrapper = ({ children }: PropsWithChildren) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default ThemeContextWrapper;
