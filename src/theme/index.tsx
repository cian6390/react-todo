import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { ThemeKey, getTheme } from "./themes";
import ThemeContext from "./context";

const Provider: React.FC = (props) => {
  const [mode, setTheme] = React.useState("light" as ThemeKey);
  return (
    <ThemeContext.Provider value={{ mode, setTheme }}>
      <ThemeProvider theme={getTheme(mode)}>{props.children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Provider;
