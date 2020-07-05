import React, {useEffect, useState, useReducer} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

// containers
import Authentication from "./containers/Auth";
import Logout from "./containers/Auth/Logout";
import Home from "./containers/Home";
import WorkflowEditor from "./containers/Workflow/Editor";

// aws
import {Auth} from "aws-amplify";
import {Hub} from "aws-amplify";

// hoc
import Layout from "./hoc/Layout";

// style
import theme from "./style/theme";
import {ThemeProvider} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";

// Utility
import {DARK_THEME, LIGHT_THEME, NO_THEME} from "./utility/uiConstants";

// import i18n (needs to be bundled ;))
import "./utility/i18n";
import {useTranslation} from "react-i18next";

// TODO: Redux stuff revise + middleware for console log stuff + go through hub and useReducer
// TODO: Unit tests

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
    dispatch({type: "setUser", user});
  } catch (err) {
    dispatch({type: "loaded"});
  }
}

function App() {
  const {i18n} = useTranslation();
  const [userState, dispatch] = useReducer(reducer, initialUserState);

  const [themeType, setThemeType] = useState(NO_THEME);

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
      }
    });
    // we check for the current user unless there is a redirect to ?signedIn=true
    if (!window.location.search.includes("?signedin=true")) {
      checkUser(dispatch);
    }
  }, []);

  return (
    <ThemeProvider theme={theme(LIGHT_THEME)}>
      <CssBaseline />
      <Router>
        <Layout
          userState={userState}
          themeType={themeType}
          onClickHandler={onClickHandler}
        >
          <Container maxWidth="lg">
            <Switch>
              <Route path="/:lang/home">
                <Home />
              </Route>
              <Route path="/index.html">
                <Redirect to={`/${i18n.language}/home?theme=blue`} />
              </Route>
              <Route path="/:lang/auth">
                <Authentication />
              </Route>
              <Route path="/:lang/logout">
                <Logout />
              </Route>
              <Route path="/:lang/workfloweditor">
                <WorkflowEditor />
              </Route>
              <Route path="/:lang/notFound">
                <NotFound />
              </Route>
              <Route>
                <Redirect to={`/${i18n.language}/notfound?theme=blue`} />
              </Route>
            </Switch>
          </Container>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

function Status({code, children}) {
  return (
    <Route
      render={({staticContext}) => {
        if (staticContext) staticContext.status = code;
        return children;
      }}
    />
  );
}

function NotFound() {
  const {t} = useTranslation();
  return (
    <Status code={404}>
      <Typography variant="h6" color="textPrimary">
        {t("router.page.not.found.text")}
      </Typography>
    </Status>
  );
}

export default App;
