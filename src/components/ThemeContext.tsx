import React from "react";

export interface ThemeContext {
  mode: 'light' | 'dark';
}

export const themeContext = React.createContext({ mode: 'light' } as ThemeContext);

export const ThemeProvider = function ({ children }: { children: React.ReactNode}) {

  return (
    <themeContext.Provider value={{ mode: 'light' }}>
      {children}
    </themeContext.Provider>
  );
};
