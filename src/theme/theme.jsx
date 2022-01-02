import { createTheme } from "@mui/material";
import Sverige from "../Fonts/SverigeScriptDecorated_Demo.ttf";
import SverigeClean from "../Fonts/SverigeScriptClean_Demo.ttf";
import Lora from "../Fonts/Lora-Regular.ttf";
import LoraMedium from "../Fonts/Lora-Medium.ttf";
export const themeOptions = {
  components: {
    MuiDivider: {
      // Name of the slot

      root: {
        // Some CSS
        // backgroundColor: "#E8C7C8",
        margin: "20px",
        borderColor: "#1974D2",
        color: "#1974D2",
      },
    },

    MuiButton: {
      styleOverrides: {
        // Name of the slot

        root: {
          // Some CSS
          // backgroundColor: "#E8C7C8",
          margin: "20px",
          borderColor: "#1974D2",
          color: "#1974D2",
        },
      },
    },
    MuiCssBaseline: {
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
        @font-face {
          font-family: 'SverigeClean';
          src: local('Lora'),  url(${SverigeClean}) format('woff');
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
    background: {
     // default: "#DAA520",
    },
  },
  typography: {
    body1: { fontFamily: "Lora" },
    body2: { fontFamily: "LoraMD" },
    h3: { fontFamily: "Sverige" },
    h4: { fontFamily: "SverigeClean", padding: "25px" },
    subtitle1: { fontFamily: "LoraMD" ,background: {
       default: "#FFDF00",
     }, },
  },
};
const theme = createTheme(themeOptions);
export default theme;
