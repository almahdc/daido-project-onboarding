import React from "react";

// style
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

// components
import SidebarItem from "../SidebarItem";

const useStyles = makeStyles(() => ({
  sidebar: {
    padding: "1em",
    backgroundColor: "#7FECAF"
  }
}));

export default function SidebarToolbox({handleDragItem}) {
  const classes = useStyles();
  return (
    <Paper className={classes.sidebar} color="secondary">
      <SidebarItem type="Machine node" onDragItem={handleDragItem} />
      <SidebarItem type="Chemical process node" onDragItem={handleDragItem} />
      <SidebarItem type="Transportation node" onDragItem={handleDragItem} />
    </Paper>
  );
}
