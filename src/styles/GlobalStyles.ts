import { createGlobalStyle } from "styled-components";

interface ThemeProps {
  colorProfile: {
    colors: {
      primary300: string;
      primary400: string;
      primary500: string;
      primary600: string;
      primary700: string;
      primary800: string;
      primary900: string;
    };
  };
}

export const GlobalStyles = createGlobalStyle<ThemeProps>`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "nunito", sans-serif;
}
:root {
  --primary-extra-light: ${(props) => props.colorProfile.colors.primary300};
  --primary-light: ${(props) => props.colorProfile.colors.primary400};
  --primary: ${(props) => props.colorProfile.colors.primary500};
  --primary-semi-dark: ${(props) => props.colorProfile.colors.primary600};
  --primary-dark: ${(props) => props.colorProfile.colors.primary700};
  --primary-extra-dark: ${(props) => props.colorProfile.colors.primary800};
  --primary-super-dark: ${(props) => props.colorProfile.colors.primary900};


  --background: ${(props) => props.theme.colors.background};
  --secondary-background: ${(props) => props.theme.colors.secondaryBackground};
  --tertiary-background: ${(props) => props.theme.colors.tertiaryBackground};
  --quartenary-background: ${(props) =>
    props.theme.colors.quartenaryBackground};
  --green: ${(props) => props.theme.colors.green};
  --gray: ${(props) => props.theme.colors.gray};
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
