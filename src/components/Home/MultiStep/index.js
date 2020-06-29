import React from "react";

// components
import OneStep from "./OneStep";

// styles
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Document from "../../../assets/images/landingPage/document.png";
import Invite from "../../../assets/images/landingPage/invite.png";
import Pencil from "../../../assets/images/landingPage/pencil.png";
import People from "../../../assets/images/landingPage/people.png";
import Portfolio from "../../../assets/images/landingPage/portfolio.png";

// TODO: make each componet to be 100vh - menu basically, and scroll to them nicely

// translate
import {useTranslation} from "react-i18next";

const useStyles = makeStyles({
  image: {
    maxWidth: "25em"
  },
  container: {
    justifyContent: "center",
    margin: "3em 0"
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

export default function MultiSteps() {
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
          {t("landing.page.how.it.works.title.text")}
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
          title={t("landing.page.how.it.works.step.1.title.text")}
          image={Portfolio}
          content={t("landing.page.how.it.works.step.1.content.text")}
          isBackgroundTransparent={false}
        />
        <OneStep
          title={t("landing.page.how.it.works.step.2.title.text")}
          image={Invite}
          content={t("landing.page.how.it.works.step.2.content.text")}
        />
        <OneStep
          title={t("landing.page.how.it.works.step.3.title.text")}
          image={Pencil}
          content={t("landing.page.how.it.works.step.3.content.text")}
        />
        <OneStep
          title={t("landing.page.how.it.works.step.4.title.text")}
          image={People}
          content={t("landing.page.how.it.works.step.4.content.text")}
        />
        <OneStep
          title={t("landing.page.how.it.works.step.5.title.text")}
          image={Document}
          content={t("landing.page.how.it.works.step.5.content.text")}
        />
      </Grid>
    </Grid>
  );
}
