import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import darkTheme from "./styles/themes/darkTheme";
import Habit from "./components/Habit";

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyles />
      <Habit completed={2} />
      <Habit completed={3} />
    </ThemeProvider>
  );
}

export default App;
