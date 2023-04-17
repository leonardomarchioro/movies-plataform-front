import React from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles/GlobalStyles";
import theme from "../../styles/themes/theme";

interface IValues {
  colors: DefaultTheme;
}

export const ThemeContext = React.createContext({} as IValues);

function ThemeStyleProvider({ children }: { children: React.ReactNode }) {
  const colors: DefaultTheme = theme;

  return (
    <ThemeProvider theme={colors}>
      <GlobalStyles />
      <ThemeContext.Provider value={{ colors }}>
        {children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default ThemeStyleProvider;
