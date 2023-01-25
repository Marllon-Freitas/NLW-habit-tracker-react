import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
    colors: {
      background: string;
      secondaryBackground: string;
      tertiaryBackground: string;
      quartenaryBackground: string;
      green: string;
      gray: string;
      text: string;
    };
  }

  export interface DefaultColorProfile {
    title: string;
    colors: {
      primary300: string;
      primary400: string;
      primary500: string;
      primary600: string;
      primary700: string;
      primary800: string;
      primary900: string;
    };
  }
}
