import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
  --primary: ${props => props.theme.colors.primary};
  --secondary: ${props => props.theme.colors.secondary};
  --background: ${props => props.theme.colors.background};
  --text: ${props => props.theme.colors.text};
}
`;
