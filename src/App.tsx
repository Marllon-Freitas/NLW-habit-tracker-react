import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import darkTheme from "./styles/themes/darkTheme";
import "./lib/dayjs";
import Pages from "./pages";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Pages />
    </ThemeProvider>
  );
}

export default App;
