import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import darkTheme from "./styles/themes/darkTheme";
import lightTheme from "./styles/themes/lightTheme";

import {
  purpleProfile,
  greenProfile,
  blueProfile,
  redProfile
} from "./styles/themes/colors";

import "./lib/dayjs";
import Pages from "./pages";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles colorProfile={purpleProfile} />
      <Pages />
    </ThemeProvider>
  );
}

export default App;
