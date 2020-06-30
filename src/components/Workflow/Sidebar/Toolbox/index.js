import React from "react";

// style
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

// components
import SidebarGroup from "../SidebarGroup";
import {Typography, Button, Grid} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  sidebar: {
    padding: "1em",
    backgroundColor: "#7FECAF",
    height: "75vh",
    display: "flex",
    flexDirection: "column"
  },
  title: {
    textAlign: "center"
  },
  blank: {
    flex: 1,
    backgroundColor: "transparent"
  },
  button: {
    backgroundColor: "#99FFC9",
    width: "100%",
  }
}));

const inputItems = [
  {name: "Material node"}
];
const inputOutputItems = [
  {name: "Machine Node"},
  {name: "Chemical process node"}
];
const outputItems = [
  {name: "Transportation node"}
];

export default function SidebarToolbox({handleDragItem, openDetails}) {
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

      <Grid className={classes.blank} />
      <Button className={classes.button}  variant="outlined" color="primary" onClick={openDetails}>
        Open Details
      </Button>
    </Paper>
  );
}
