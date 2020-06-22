import React, {useReducer} from "react";
import {Redirect} from "react-router";

// translation
import {useTranslation} from "react-i18next";

// aws
import {Auth} from "aws-amplify";

// data
import UserData from "../../utility/userData";

// style
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
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

// TODO: reducer stuff & all different cases - go through it

// component
export default function Authentication() {
  const classes = useStyles();

  const formType = "signIn";
  const [formState, updateFormState] = useReducer(reducer, initialFormState);

  async function signIn({username, password}) {
    try {
      await Auth.signIn(username, password);
      UserData.setUser(username);
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
        <Redirect to="/" />
      ) : (
        <Grid item md={4} xs={12} className={classes.grid}>
          {renderForm(formState)}
        </Grid>
      )}
    </Grid>
  );
}

function SignIn(props) {
  const {t} = useTranslation();
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <TextField
        id="standard-username-input"
        label={t("auth.sing.in.username.placeholder")}
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
        label={t("auth.sing.in.password.placeholder")}
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
        {t("auth.sing.in.button")}
      </Button>
    </Box>
  );
}
