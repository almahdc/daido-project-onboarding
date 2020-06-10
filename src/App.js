import React from "react";
//import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

import {withAuthenticator, AmplifySignOut} from "@aws-amplify/ui-react";

// hoc
import Layout from "./hoc/Layout";

// style
import theme from "./style/theme";
import {ThemeProvider} from "@material-ui/core/styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <div>
          <AmplifySignOut />
          <p>A bare bones application!</p>
        </div>
      </Layout>
    </ThemeProvider>
  );
}

export default withAuthenticator(App, true);
