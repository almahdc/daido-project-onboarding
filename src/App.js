import React from "react";

// style
import theme from "./style/theme";
import {ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div>
        <p>A bare bones application!</p>
      </div>
    </ThemeProvider>
  );
}

export default App;
