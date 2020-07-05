import React from "react";

// components
import {Typography, Button, Grid, Input} from "@material-ui/core";

// translate
import {useTranslation} from "react-i18next";

// style
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import InputAdornment from "@material-ui/core/InputAdornment";

// utility
import {INPUT_ONLY, OUTPUT_ONLY} from "../../../../utility/flowchart/constants";

const useStyles = makeStyles(() => ({
  sidebar: {
    padding: "1em",
    backgroundColor: "#ececec",
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
    backgroundColor: "#fff",
    borderRadius: "5px",
    padding: "5px",
    minHeight: "2em",
    verticalAlign: "center",
    color: "#000"
  },
  blank: {
    flex: 1,
    backgroundColor: "transparent"
  },
  cancelButton: {
    backgroundColor: "#ffcccb",
    width: "100%",
    "&:hover": {
      backgroundColor: "#E6B3B2"
    },
    border: "0px"
  },
  editButton: {
    backgroundColor: "#99FFC9",
    width: "100%",
    border: "0px"
  }
}));

export default function SidebarDetails({onSaveData, onChangedData, data}) {
  const classes = useStyles();

  const {t} = useTranslation();

  const sidebarDetailsOutput = (
    <>
      <Typography className={classes.title} variant="h5" color="primary">
        {t("workflow.page.editor.process.type.output")}
      </Typography>
      <Typography className={classes.label} variant="body2" color="primary">
        {t("workflow.page.editor.details.type")}
      </Typography>
      <Input
        className={classes.value}
        value={data.properties.subtype}
        disabled={true}
        disableUnderline={true}
      />
      <Typography className={classes.label} variant="body2" color="primary">
        {t("workflow.page.editor.details.name")}
      </Typography>
      <Input
        className={classes.value}
        value={data.properties.name}
        disableUnderline={true}
        onChange={event =>
          onChangedData({
            ...data,
            properties: {...data.properties, name: event.target.value}
          })
        }
      />
      <Typography className={classes.label} variant="body2" color="primary">
        {t("workflow.page.editor.details.amount")}
      </Typography>
      <Input
        className={classes.value}
        value={data.properties.amount}
        disableUnderline={true}
        onChange={event =>
          onChangedData({
            ...data,
            properties: {...data.properties, amount: event.target.value}
          })
        }
        endAdornment={
          <InputAdornment position="end">
            {t("workflow.page.editor.details.amount.kg.text")}
          </InputAdornment>
        }
      />
    </>
  );

  const sidebarDetailsInput = (
    <>
      <Typography className={classes.title} variant="h5" color="primary">
        {t("workflow.page.editor.process.type.input")}
      </Typography>
      <Typography className={classes.label} variant="body2" color="primary">
        {t("workflow.page.editor.details.type")}
      </Typography>
      <Input
        className={classes.value}
        disabled={true}
        disableUnderline={true}
        value={data.properties.subtype}
      />
      <Typography className={classes.label} variant="body2" color="primary">
        {t("workflow.page.editor.details.name")}
      </Typography>
      <Input
        className={classes.value}
        value={data.properties.name}
        disableUnderline={true}
        onChange={event =>
          onChangedData({
            ...data,
            properties: {...data.properties, name: event.target.value}
          })
        }
      />
      <Typography className={classes.label} variant="body2" color="primary">
        {t("workflow.page.editor.details.amount")}
      </Typography>
      <Input
        className={classes.value}
        value={data.properties.amount}
        disableUnderline={true}
        onChange={event =>
          onChangedData({
            ...data,
            properties: {...data.properties, amount: event.target.value}
          })
        }
        endAdornment={
          <InputAdornment position="end">
            {t("workflow.page.editor.details.amount.kg.text")}
          </InputAdornment>
        }
      />
      <Typography className={classes.label} variant="body2" color="primary">
        {t("workflow.page.editor.details.supplier")}
      </Typography>
      <Input
        className={classes.value}
        value={data.properties.supplier}
        disableUnderline={true}
        onChange={event =>
          onChangedData({
            ...data,
            properties: {
              ...data.properties,
              supplier: event.target.value
            }
          })
        }
      />
    </>
  );

  const sidebarDetailsOutputInput = (
    <>
      <Typography className={classes.title} variant="h5" color="primary">
        {t("workflow.page.editor.process.type.input")}
      </Typography>
      <Typography className={classes.label} variant="body2" color="primary">
        {t("workflow.page.editor.details.type")}
      </Typography>
      <Input
        className={classes.value}
        disabled={true}
        disableUnderline={true}
        value={data.properties.subtype}
      />
      <Typography className={classes.label} variant="body2" color="primary">
        {t("workflow.page.editor.details.name")}
      </Typography>
      <Input
        className={classes.value}
        value={data.properties.name}
        disableUnderline={true}
        onChange={event =>
          onChangedData({
            ...data,
            properties: {...data.properties, name: event.target.value}
          })
        }
      />
      <Typography className={classes.label} variant="body2" color="primary">
        {t("workflow.page.editor.details.duration")}
      </Typography>
      <Input
        className={classes.value}
        value={data.properties.duration}
        disableUnderline={true}
        onChange={event =>
          onChangedData({
            ...data,
            properties: {
              ...data.properties,
              duration: event.target.value
            }
          })
        }
        endAdornment={
          <InputAdornment position="end">
            {t("workflow.page.editor.details.duration.h.text")}
          </InputAdornment>
        }
      />
    </>
  );

  const sidebarData =
    data.type === INPUT_ONLY
      ? sidebarDetailsInput
      : data.type === OUTPUT_ONLY
      ? sidebarDetailsOutput
      : sidebarDetailsOutputInput;

  return (
    <Paper className={classes.sidebar} color="secondary">
      {sidebarData}
      <Grid className={classes.blank} />
      <Grid container className={classes.container}>
        <Grid item xs={12}>
          <Button
            className={classes.editButton}
            variant="outlined"
            color="primary"
            onClick={e => onSaveData(e, data)}
          >
            {t("workflow.page.editor.details.save")}
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
}
