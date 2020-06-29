import React from "react";

// styles
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Sketch from "../../../assets/images/landingPage/sketch.png";
import Time from "../../../assets/images/landingPage/time.png";
import Bot from "../../../assets/images/landingPage/bot.png";

// components
import OneStep from "../MultiStep/OneStep";

// translate
import {useTranslation} from "react-i18next";

const useStyles = makeStyles({
  image: {
    maxWidth: "25em"
  },
  container: {
    justifyContent: "center",
    margin: "2em 0",
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

export default function Features() {
  const {t} = useTranslation();
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item>
        <Typography
          color="textSecondary"
          variant="h5"
          className={classes.title}
        >
          {t("landing.page.features.title.text")}
        </Typography>
        <Typography color="textSecondary" variant="subtitle1">
          {t("landing.page.features.subtitle.text")}
        </Typography>
      </Grid>
      <Grid
        item
        container
        spacing={5}
        direction="row"
        className={classes.container}
      >
        <OneStep
          title={t("landing.page.features.1.title.text")}
          image={Bot}
          content={t("landing.page.features.1.content.text")}
          isBackgroundTransparent={true}
        />
        <OneStep
          title={t("landing.page.features.2.title.text")}
          image={Sketch}
          content={t("landing.page.features.2.content.text")}
          isBackgroundTransparent={true}
        />
        <OneStep
          title={t("landing.page.features.3.title.text")}
          image={Time}
          content={t("landing.page.features.3.content.text")}
          isBackgroundTransparent={true}
        />
      </Grid>
    </Grid>
  );
}
