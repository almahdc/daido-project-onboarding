import React, {useEffect, useState, useReducer} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

// containers
import Authentication from "./containers/Auth";
import Logout from "./containers/Auth/Logout";
import Home from "./containers/Home";
import WorkflowEditor from "./containers/Workflow/Editor";

import {Auth} from "aws-amplify";

// hoc
import Layout from "./hoc/Layout";

// style
import theme from "./style/theme";
import {ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import {Hub} from "aws-amplify";

// Utility
import {DARK_THEME, LIGHT_THEME} from "./utility/uiConstants";

function reducer(state, action) {
  switch (action.type) {
    case "setUser":
      return {...state, user: action.user, loading: false};
    case "loaded":
      return {...state, loading: false};
    default:
      return state;
  }
}

const initialUserState = {user: null, loading: true};

async function checkUser(dispatch) {
  try {
    const user = await Auth.currentAuthenticatedUser();
    console.log("user: ", user);
    dispatch({type: "setUser", user});
  } catch (err) {
    console.log("err: ", err);
    dispatch({type: "loaded"});
  }
}

function App() {
  const [userState, dispatch] = useReducer(reducer, initialUserState);

  const [themeType, setThemeType] = useState(null);

  const setInitialTheme = () => {
    return localStorage.getItem("themeType")
      ? localStorage.getItem("themeType")
      : window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ? DARK_THEME
      : LIGHT_THEME;
  };

  useEffect(() => {
    setThemeType(setInitialTheme());
  }, []);

  const onClickHandler = () => {
    localStorage.setItem("themeType", changeTheme(themeType));
    setThemeType(localStorage.getItem("themeType"));
  };

  const changeTheme = currentTheme => {
    return currentTheme === DARK_THEME ? LIGHT_THEME : DARK_THEME;
  };

  useEffect(() => {
    // set listener for auth events
    // TODO: understand it!
    Hub.listen("auth", data => {
      const {payload} = data;
      if (payload.event === "signIn") {
        setImmediate(() => dispatch({type: "setUser", user: payload.data}));
        // setImmediate(() =>
        //   window.history.pushState({}, null, "https://www.amplifyauth.dev/")
        // );
        // updateFormState("base");
      }
      // this listener is needed for form sign ups since the OAuth will redirect & reload
      if (payload.event === "signOut") {
        setTimeout(() => dispatch({type: "setUser", user: null}), 350);
        console.log("SIGN OUT");
      }
    });
    // we check for the current user unless there is a redirect to ?signedIn=true
    if (!window.location.search.includes("?signedin=true")) {
      console.log("SIGN IN");
      checkUser(dispatch);
    }
  }, []);

  return (
    <ThemeProvider theme={theme(themeType)}>
      <CssBaseline />
      <Router>
        <Switch>
          <Layout
            userState={userState}
            themeType={themeType}
            onClickHandler={onClickHandler}
          >
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/auth">
              <Authentication />
            </Route>
            <Route path="/logout">
              <Logout />
            </Route>
            <Route path="/workfloweditor">
              <WorkflowEditor />
            </Route>
          </Layout>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
