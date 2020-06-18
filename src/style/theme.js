import {createMuiTheme} from "@material-ui/core";

// Utility
import {DARK_THEME, LIGHT_THEME} from "../utility/uiConstants";

const theme = themeType => {
  return createMuiTheme({
    palette: {
      type: themeType === DARK_THEME ? DARK_THEME : LIGHT_THEME,
      secondary: {
        main: "#b19bf7"
      }
    },
    typography: {
      h1: {
        fontFamily: ["Noto Sans"]
      },
      h2: {
        fontFamily: ["Noto Sans"]
      },
      h3: {
        fontFamily: ["Noto Sans"]
      },
      h4: {
        fontFamily: ["Noto Sans"]
      },
      h5: {
        fontFamily: ["Noto Sans"]
      },
      h6: {
        fontFamily: ["Noto Sans"]
      },
      fontFamily: ["Open Sans"]
    }
  });
};

export default theme;
