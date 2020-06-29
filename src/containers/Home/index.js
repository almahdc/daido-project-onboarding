import React from "react";

// components
import {NavLink} from "react-router-dom";
import AboutUs from "../../components/Home/AboutUs";
import MultiStep from "../../components/Home/MultiStep";
import Features from "../../components/Home/Features";
import OurPartners from "../../components/Home/OurPartners";
import TeamLeadership from "../../components/Home/TeamLeadership";

// style
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import Screenshot from "../../assets/images/screenDashboardMock.png";

// // utility
// import UserData from "../../utility/userData";
// import {UserTypes} from "../../utility/constants";

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
    height: "45em"
  },
  item: {
    height: "10em"
  },
  button: {
    margin: "0 0 5em 0"
  }
});

// component
export default function Home(props) {
  const {t, i18n} = useTranslation();
  const classes = useStyles();

  const generalLandingPage = (
    <Grid container spacing={5} className={classes.container}>
      <Grid item>
        <Typography variant="h3" color="textPrimary">
          <Trans i18nKey="landing.page.title.main.text">
            Some newlines <br /> would be <br /> fine
          </Trans>
        </Typography>
      </Grid>
      <Grid item container>
        <Grid item md={6}>
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

  return (
    <>
      {generalLandingPage}
      <MultiStep />
      <Features />
      <AboutUs />
      <TeamLeadership />
      <OurPartners />
    </>
  );
}
