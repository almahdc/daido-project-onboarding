import React from "react";

// style
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

// utility
import UserData from "../../utility/userData";
import {UserTypes} from "../../utility/constants";

// translation
import {useTranslation} from "react-i18next";

// component
export default function Home(props) {
  const {t} = useTranslation();

  const generalLandingPage = (
    <Grid container spacing={5}>
      <Grid item>
        <Typography variant="h3" color="primary">
          {t("landing.page.title.main.text")}
        </Typography>
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
