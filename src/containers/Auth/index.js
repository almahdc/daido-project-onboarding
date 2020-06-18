import React, {useReducer} from "react";

import {Auth} from "aws-amplify";

import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

import {Redirect} from "react-router";

import UserData from "../../utility/userData";

const useStyles = makeStyles(theme => ({
  grid: {
    margin: "auto"
  },
  box: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  formItems: {
    width: "100%",
    marginTop: "1.5em"
  }
}));

const initialFormState = {
  username: "",
  password: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "updateFormState":
      return {
        ...state,
        [action.e.target.name]: action.e.target.value
      };
    default:
      return state;
  }
}

export default function Authentication() {
  const classes = useStyles();

  const formType = "signIn";
  const [formState, updateFormState] = useReducer(reducer, initialFormState);

  async function signIn({username, password}) {
    try {
      await Auth.signIn(username, password);
      UserData.setUser(username);
      console.log("UserData.getUser()", UserData.getUser());
    } catch (err) {
      console.error("error signing up..", err);
    }
  }

  function renderForm() {
    switch (formType) {
      case "signIn":
        return (
          <SignIn
            signIn={() => signIn(formState)}
            updateFormState={e => updateFormState({type: "updateFormState", e})}
          />
        );
      default:
        return null;
    }
  }

  return (
    <Grid container>
      {UserData.getUser() ? (
        <Redirect to="/home" />
      ) : (
        <Grid item md={4} xs={12} className={classes.grid}>
          {renderForm(formState)}
        </Grid>
      )}
    </Grid>
  );
}

function SignIn(props) {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <TextField
        id="standard-username-input"
        label="Username"
        type="text"
        name="username"
        onChange={e => {
          e.persist();
          props.updateFormState(e);
        }}
        className={classes.formItems}
      />

      <TextField
        id="standard-password-input"
        label="Password"
        type="password"
        name="password"
        autoComplete="current-password"
        onChange={e => {
          e.persist();
          props.updateFormState(e);
        }}
        className={classes.formItems}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={props.signIn}
        className={classes.formItems}
      >
        Sign In
      </Button>
    </Box>
  );
}
