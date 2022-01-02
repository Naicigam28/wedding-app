import { createTheme } from "@mui/material";
import Sverige from "../Fonts/SverigeScriptDecorated_Demo.ttf";
import Lora from "../Fonts/Lora-Regular.ttf";
import LoraMedium from "../Fonts/Lora-Medium.ttf";
export const themeOptions = {
  components: {
    MuiCssBaseline: {
      backgroundColor:"red",
      styleOverrides: `
      
        @font-face {
          font-family: 'Sverige';
          src: local('Sverige'),  url(${Sverige}) format('woff');
        }
        @font-face {
          font-family: 'Lora';
          src: local('Lora'),  url(${Lora}) format('woff');
        }
        @font-face {
          font-family: 'LoraMD';
          src: local('Lora'),  url(${LoraMedium}) format('woff');
        }
      
      `,
    },
  },
  palette: {
    type: "light",
    primary: {
      main: "#E8C7C8",
    },
    secondary: {
      main: "#1974D2",
    },
  },
  typography: {
    body1: { fontFamily: "Lora" ,},
    body2: { fontFamily: "LoraMD" ,},
    h3: { fontFamily: "Sverige" },
  },
};
const theme = createTheme(themeOptions);
export default theme;
