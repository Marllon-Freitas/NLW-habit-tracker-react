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
}
