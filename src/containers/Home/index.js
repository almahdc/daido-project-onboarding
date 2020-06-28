import React from "react";

// components
import {NavLink} from "react-router-dom";

// style
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Screenshot from "../../assets/images/screenDashboardMock.png";

// utility
import UserData from "../../utility/userData";
import {UserTypes} from "../../utility/constants";

// translation
import {useTranslation, Trans} from "react-i18next";

const useStyles = makeStyles({
  container: {
    padding: "0 3em"
  },
  imageContainer: {
    overflow: "hidden"
  },
  image: {
    height: "40em"
  },
  item: {
    height: "10em"
  },
  button: {
    marginTop: "5em"
  }
});

// component
export default function Home(props) {
  const {t, i18n} = useTranslation();
  const classes = useStyles();

  const generalLandingPage = (
    <Grid container spacing={5} className={classes.container}>
      <Grid item md={6}>
        <Typography variant="h4" color="textPrimary">
          <Trans i18nKey="landing.page.title.main.text">
            Some newlines <br /> would be <br /> fine
          </Trans>
        </Typography>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          component={NavLink}
          to={`/${i18n.language}/workfloweditor`}
        >
          {t("landing.page.get.started.button")}
        </Button>
      </Grid>
      <Grid item container md={6}>
        <Grid item xs={12} className={classes.item} />
        <Grid item className={classes.imageContainer}>
          <img
            src={Screenshot}
            className={classes.image}
            alt="Mock onboarder dashboard"
          />
        </Grid>
      </Grid>
    </Grid>
  );

  const adminHome = t("home.admin.general.text");

  return (
    <>
      {UserData.getUser() === UserTypes.ADMIN
        ? adminHome
        : UserData.getUser() === UserTypes.MANUFACTURER
        ? null
        : generalLandingPage}
    </>
  );
}
