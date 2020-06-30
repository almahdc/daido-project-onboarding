import React from "react";

// style
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

// components
import SidebarGroup from "../SidebarGroup";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  sidebar: {
    padding: "1em",
    backgroundColor: "#7FECAF",
    minHeight: "75vh"
  },
  title: {
    textAlign: "center"
  }
}));

const inputItems = [
  {name: "Machine Node I"},
  {name: "Transportation node I"}
];
const inputOutputItems = [
  {name: "Machine Node IO"},
  {name: "Chemical process node IO"}
];
const outputItems = [
  {name: "Transportation node O"}
];

export default function SidebarToolbox({handleDragItem}) {
  const classes = useStyles();

  return (
    <Paper className={classes.sidebar} color="secondary">
      <Typography className={classes.title} variant="h5" color="primary">
        TOOLBOX
      </Typography>
      <SidebarGroup
        groupName="INPUT"
        items={inputItems}
        handleDragItem={handleDragItem}
      />
      <SidebarGroup
        groupName="INPUT-OUTPUT"
        items={inputOutputItems}
        handleDragItem={handleDragItem}
      />
      <SidebarGroup
        groupName="OUTPUT"
        items={outputItems}
        handleDragItem={handleDragItem}
      />
    </Paper>
  );
}
