import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "nunito", sans-serif;
}
:root {
  --primary-extra-light: ${(props) => props.theme.colors.primary300};
  --primary-light: ${(props) => props.theme.colors.primary400};
  --primary: ${(props) => props.theme.colors.primary500};
  --primary-semi-dark: ${(props) => props.theme.colors.primary600};
  --primary-dark: ${(props) => props.theme.colors.primary700};
  --primary-extra-dark: ${(props) => props.theme.colors.primary800};
  --primary-super-dark: ${(props) => props.theme.colors.primary900};
  --secondary: ${(props) => props.theme.colors.secondary};
  --background: ${(props) => props.theme.colors.background};
  --text: ${(props) => props.theme.colors.text};
}

html {
  background: var(--background);
  color: var(--text);
}

button {
  cursor: pointer;
  color: var(--text);
}
`;
