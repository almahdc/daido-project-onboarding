import React from "react";

// styles
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Circulor from "../../../assets/images/landingPage/partners/circulor.png";
import Systemiq from "../../../assets/images/landingPage/partners/systemiq.png";
import EMove from "../../../assets/images/landingPage/partners/emove.png";

// components
import OnePartner from "./OnePartner";

// translate
import {useTranslation} from "react-i18next";

const useStyles = makeStyles({
  image: {
    maxWidth: "25em"
  },
  container: {
    textAlign: "center",
    justifyContent: "center",
    margin: "2em 0"
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
    <Grid container className={classes.container}>
      <Grid item>
        <Typography
          color="textSecondary"
          variant="h5"
          className={classes.title}
        >
          {t("landing.page.our.partners.title.text")}
        </Typography>
      </Grid>
      <Grid
        item
        container
        spacing={5}
        direction="row"
        className={classes.container}
      >
        <OnePartner
          description={t("landing.page.our.partners.1.content.text")}
          image={Circulor}
          additional={t("landing.page.how.it.works.step.1.content.text")}
        />
        <OnePartner
          description={t("landing.page.our.partners.2.content.text")}
          image={Systemiq}
        />
        <OnePartner
          description={t("landing.page.our.partners.3.content.text")}
          image={EMove}
        />
      </Grid>
    </Grid>
  );
}
