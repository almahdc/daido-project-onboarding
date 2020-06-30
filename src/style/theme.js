import {createMuiTheme} from "@material-ui/core";

// Utility
import {DARK_THEME, LIGHT_THEME} from "../utility/uiConstants";

const theme = themeType => {
  return createMuiTheme({
    palette: {
      type: themeType === DARK_THEME ? DARK_THEME : LIGHT_THEME,
      primary: {
        main: "#0B43A4",
        contrastText: "#fff",
        light: "#757ce8",
        dark: "#002884"
      },
      text: {
        primary: "#fff",
        secondary: "#0B43A4"
      },
      secondary: {
        main: "#7FECAF",
        contrastText: "#000"
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
