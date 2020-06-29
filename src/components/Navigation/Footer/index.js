import React from "react";

// styles
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

// translate
import {useTranslation} from "react-i18next";

const useStyles = makeStyles({
  content: {
    textAlign: "center",
    background: "#84ADE4",
    padding: "0.5em 0",
    height: "inherit",
    width: "inherit",
    display: "block"
  }
});
export default function Footer() {
  const {t} = useTranslation();
  const classes = useStyles();
  return (
    <Typography
      variant="caption"
      color="textPrimary"
      className={classes.content}
    >
      {t("footer.copyright.text")}
    </Typography>
  );
}
