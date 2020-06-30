import React from "react";

// style
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

// components
import {Typography, Button, Grid} from "@material-ui/core";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles(() => ({
  sidebar: {
    padding: "1em",
    backgroundColor: "#7FECAF",
    height: "75vh",
    display: "flex",
    flexDirection: "column"
  },
  title: {
    textAlign: "center",
    marginBottom: "20px"
  },
  label: {
    marginTop: "20px",
    paddingLeft: "10px"
  },
  value: {
    marginTop: "10px",
    paddingLeft: "10px",
    backgroundColor: "#99FFC9",
    borderRadius: "5px",
    padding: "5px",
    minHeight: "2em",
    verticalAlign: "center"
  },
  blank: {
    flex: 1,
    backgroundColor: "transparent"
  },
  cancelButton: {
    backgroundColor: "#ffcccb",
    width: "100%",
    '&:hover': {
      backgroundColor: "#E6B3B2",
    }
  },
  editButton: {
    backgroundColor: "#99FFC9",
    width: "100%",
  }
}));

export default function SidebarDetails({openDialog, closeDetails, type, name, description}) {
  const classes = useStyles();
  const {t} = useTranslation();

  const getTitle = () => {
    if(type === "input-only") {
        return t("workflow.page.editor.process.type.input");
    } else if (type === "input-output") {
        return t("workflow.page.editor.process.type.process");
    } else {
        return t("workflow.page.editor.process.type.output");
    }
}

  return (
    <Paper className={classes.sidebar} color="secondary">
      <Typography className={classes.title} variant="h5" color="primary">
        {t("workflow.page.editor.details.title")}
      </Typography>
      <Typography className={classes.label} variant="body2" color="primary">
        {t("workflow.page.editor.details.type")}
      </Typography>
      <Typography className={classes.value} variant="body1" color="primary">
        {getTitle()}
      </Typography><Typography className={classes.label} variant="body2" color="primary">
        {t("workflow.page.editor.details.name")}
      </Typography>
      <Typography className={classes.value} variant="body1" color="primary">
        {name}
      </Typography>
      <Typography className={classes.label} variant="body2" color="primary">
        {t("workflow.page.editor.details.description")}
      </Typography>
      <Typography className={classes.value} variant="body1" color="primary" paragraph>
        {description}
      </Typography>
      <Grid className={classes.blank} />
      <Grid container spacing={1} className={classes.container}>
        <Grid item md={6}>
          <Button className={classes.cancelButton} variant="outlined" color="primary" onClick={closeDetails}>
            {t("workflow.page.editor.details.cancel")}
          </Button>
        </Grid>
        <Grid item md={6}>
          <Button className={classes.editButton} variant="outlined" color="primary" onClick={openDialog}>
            {t("workflow.page.editor.details.edit")}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
