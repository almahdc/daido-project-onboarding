import React from "react";

// styles
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Alex from "../../../assets/images/landingPage/team/alex.png";
import Alma from "../../../assets/images/landingPage/team/alma.png";
import Felipe from "../../../assets/images/landingPage/team/felipe.png";
import Louisa from "../../../assets/images/landingPage/team/louisa.png";
import Tay from "../../../assets/images/landingPage/team/tay.png";
import Tang from "../../../assets/images/landingPage/team/tang.png";

// components
import OneTeamPlayer from "./OneTeamPlayer";

// translate
import {useTranslation} from "react-i18next";

const useStyles = makeStyles({
  image: {
    maxWidth: "25em"
  },
  container: {
    textAlign: "center",
    margin: "2em auto"
  },
  title: {
    textTransform: "uppercase"
  }
});

export default function TeamLeadership() {
  const {t} = useTranslation();
  const classes = useStyles();
  return (
    <Grid container className={classes.container}>
      <Grid item xs={12}>
        <Typography
          variant="h5"
          color="textSecondary"
          className={classes.title}
        >
          {t("landing.page.team.leadership.title.text")}
        </Typography>
      </Grid>
      <Grid item md={10} container spacing={1} className={classes.container}>
        <Grid item md={2}>
          <OneTeamPlayer
            image={Alex}
            name={t("landing.page.team.leadership.player.1.name.text")}
            content1={t("landing.page.team.leadership.uni.tum.text")}
            content2={t("landing.page.team.leadership.skill.business.text")}
          />
        </Grid>
        <Grid item md={2}>
          <OneTeamPlayer
            image={Alma}
            name={t("landing.page.team.leadership.player.2.name.text")}
            content1={t("landing.page.team.leadership.uni.tum.text")}
            content2={t("landing.page.team.leadership.skill.software.text")}
          />
        </Grid>
        <Grid item md={2}>
          <OneTeamPlayer
            image={Felipe}
            name={t("landing.page.team.leadership.player.3.name.text")}
            content1={t("landing.page.team.leadership.uni.tum.text")}
            content2={t("landing.page.team.leadership.skill.business.text")}
          />
        </Grid>
        <Grid item md={2}>
          <OneTeamPlayer
            image={Louisa}
            name={t("landing.page.team.leadership.player.4.name.text")}
            content1={t("landing.page.team.leadership.uni.tum.text")}
            content2={t("landing.page.team.leadership.skill.business.text")}
          />
        </Grid>
        <Grid item md={2}>
          <OneTeamPlayer
            image={Tay}
            name={t("landing.page.team.leadership.player.5.name.text")}
            content1={t("landing.page.team.leadership.uni.tum.text")}
            content2={t("landing.page.team.leadership.skill.software.text")}
          />
        </Grid>
        <Grid item md={2}>
          <OneTeamPlayer
            image={Tang}
            name={t("landing.page.team.leadership.player.6.name.text")}
            content1={t("landing.page.team.leadership.uni.scad.text")}
            content2={t("landing.page.team.leadership.skill.ux.text")}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}
