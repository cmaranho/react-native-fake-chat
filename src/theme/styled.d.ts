// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      active_navigation: string;
      background: string;
      balloon: string;
      button: string;
      button_tab_guide: string;
      button_tab_guide_inactive: string;
      card: string;
      highlight: string;
      primary: string;
      inactive_navigation: string;
      opaque: string;
      text: string;
    };
    fonts: {
      bold: string;
      light: string;
      regular: string;
      semibold: string;
    };
  }
}
