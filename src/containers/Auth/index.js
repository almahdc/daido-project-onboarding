import React, {useReducer} from "react";
import {Redirect} from "react-router";

// translation
import {useTranslation, Trans} from "react-i18next";

// aws
import {Auth} from "aws-amplify";

// data
import UserData from "../../utility/userData";

// style
import styled from "styled-components";
import {makeStyles} from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const MyTextField = styled(TextField)`
  .MuiInputBase-root {
    color: black;
  }
`;

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
  },
  grid: {
    margin: "auto"
  },
  button: {
    width: "100%",
    marginTop: "1.5em",
    height: "3.5em"
  },
  credentials: {
    marginTop: "1em"
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
  const {i18n} = useTranslation();

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
        <Redirect to={`/${i18n.language}/home`} />
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
      <MyTextField
        id="standard-username-input"
        label={t("auth.sing.in.username.placeholder")}
        type="text"
        name="username"
        onChange={e => {
          e.persist();
          props.updateFormState(e);
        }}
        className={classes.formItems}
        color="primary"
        classes={{root: classes.input}}
        variant="outlined"
      />

      <MyTextField
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
        color="primary"
        variant="outlined"
      />
      <Typography
        variant="caption"
        color="textSecondary"
        className={classes.credentials}
      >
        <Trans i18nKey="auth.demo.credentials.onboarder.info.text">
          Hello <strong>Alma</strong>
        </Trans>
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={props.signIn}
        className={classes.button}
      >
        {t("auth.sing.in.button")}
      </Button>
    </Box>
  );
}
