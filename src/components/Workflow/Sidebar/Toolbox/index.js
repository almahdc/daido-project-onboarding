import React from "react";

// style
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

// components
import SidebarGroup from "../SidebarGroup";
import {Typography, Button, Grid} from "@material-ui/core";
import {useTranslation} from "react-i18next";

const useStyles = makeStyles(() => ({
  sidebar: {
    padding: "1em",
    backgroundColor: "#ececec",
    minHeight: "75vh"
  },
  title: {
    textAlign: "center"
  },
  blank: {
    flex: 1,
    backgroundColor: "transparent"
  },
  button: {
    backgroundColor: "#fff",
    width: "100%",
    border: "0px"
  }
}));

// TODO: REPLACE HARDCODED ITEMS
const inputItems = [{name: "Material node"}];

const inputOutputItems = [
  {name: "Machine Node"},
  {name: "Chemical process node"}
];
const outputItems = [{name: "Transportation node"}];

export default function SidebarToolbox({handleDragItem, openDetails}) {
  const classes = useStyles();
  const {t} = useTranslation();

  return (
    <Paper className={classes.sidebar} color="secondary">
      <Typography className={classes.title} variant="h5" color="primary">
        {t("workflow.page.editor.toolbox.title")}
      </Typography>
      <SidebarGroup
        groupName={t("workflow.page.editor.process.type.input")}
        items={inputItems}
        handleDragItem={handleDragItem}
      />
      <SidebarGroup
        groupName={t("workflow.page.editor.process.type.process")}
        items={inputOutputItems}
        handleDragItem={handleDragItem}
      />
      <SidebarGroup
        groupName={t("workflow.page.editor.process.type.output")}
        items={outputItems}
        handleDragItem={handleDragItem}
      />
    </Paper>
  );
}
