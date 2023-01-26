import { GlobalStyles } from "./styles/GlobalStyles";
import {
  ThemeProvider,
  DefaultTheme,
  DefaultColorProfile,
} from "styled-components";
import darkTheme from "./styles/themes/darkTheme";
import lightTheme from "./styles/themes/lightTheme";
import { usePersistedState } from "./hooks/usePersistedState";

import {
  purpleProfile,
  greenProfile,
  blueProfile,
  redProfile,
} from "./styles/themes/colors";

import "./lib/dayjs";
import Pages from "./pages";
import { useState } from "react";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", darkTheme);
  const [colorProfile, setColorProfile] =
    usePersistedState<DefaultColorProfile>("colorProfile", purpleProfile);

  const allColorsProfileAvailable = [
    purpleProfile,
    greenProfile,
    blueProfile,
    redProfile,
  ];

  const handleToggleTheme = () => {
    setTheme(theme.title === "light" ? darkTheme : lightTheme);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles colorProfile={colorProfile} />
      <Pages
        handleToggleTheme={handleToggleTheme}
        actualTheme={theme}
        allColorsProfileAvailable={allColorsProfileAvailable}
        actualColorsProfile={colorProfile}
        setColorProfile={setColorProfile}
      />
    </ThemeProvider>
  );
}

export default App;
