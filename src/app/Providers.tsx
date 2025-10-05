'use client';
import React from "react";
import {ThemeProvider as NextThemesProvider, ThemeProviderProps} from "next-themes"

type Props = {}

const Providers = ({children,...props}: ThemeProviderProps) => {
  return (
    <NextThemesProvider
    attribute='class'
    defaultTheme='system'
    disableTransitionOnChange
    enableSystem
    >
 {children}
   </NextThemesProvider>
 
  )
}

export default Providers