import {createMuiTheme} from "@material-ui/core";

// Utility
import {DARK_THEME, LIGHT_THEME} from "../utility/uiConstants";

const theme = themeType => {
  return createMuiTheme({
    palette: {
      type: themeType === DARK_THEME ? DARK_THEME : LIGHT_THEME,
      primary: {
        main: "#0B43A4"
      },
      primaryLighter: {
        main: "#95B5DB"
      },
      black: {
        main: "#000000"
      },
      white: {
        main: "#ffffff"
      },
      secondary: {
        main: "#7FECAF"
      },
      outOfFocus: {
        main: "#888888"
      }
    },
    typography: {
      h1: {
        fontFamily: ["Nunito"]
      },
      h2: {
        fontFamily: ["Nunito"]
      },
      h3: {
        fontFamily: ["Nunito"]
      },
      h4: {
        fontFamily: ["Nunito"]
      },
      h5: {
        fontFamily: ["Nunito"]
      },
      h6: {
        fontFamily: ["Nunito"]
      },
      fontFamily: ["Nunito"]
    }
  });
};

export default theme;
