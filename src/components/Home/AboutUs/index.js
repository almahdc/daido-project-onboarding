import React from "react";

// styles
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import CircularEcon from "../../../assets/images/landingPage/circular-dark.png";

// translate
import {useTranslation} from "react-i18next";

const useStyles = makeStyles({
  image: {
    maxWidth: "25em"
  },
  container: {
    textAlign: "center"
  },
  alignAutoRight: {
    margin: "0 auto 0 0"
  },
  alignAutoLeft: {
    margin: "0 0 0 auto"
  },
  title: {
    textTransform: "uppercase"
  }
});

export default function Footer() {
  const {t} = useTranslation();
  const classes = useStyles();
  return (
    <Grid container spacing={5} className={classes.container}>
      <Grid item xs={12}>
        <Typography
          variant="h5"
          color="textSecondary"
          className={classes.title}
        >
          {t("landing.page.about.us.title.text")}
        </Typography>
      </Grid>
      <Grid item md={4} className={classes.alignAutoLeft}>
        <img
          className={classes.image}
          alt="Circular economy"
          src={CircularEcon}
        />
      </Grid>
      <Grid item md={4} className={classes.alignAutoRight}>
        <Typography
          variant="h6"
          color="textSecondary"
          className={classes.content}
        >
          {t("landing.page.about.us.content.text")}
        </Typography>
      </Grid>
    </Grid>
  );
}
