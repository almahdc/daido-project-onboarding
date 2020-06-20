import React from "react";

// style
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

// components
import SidebarItem from "./SidebarItem";

const useStyles = makeStyles(() => ({
  sidebar: {
    padding: "1em"
  }
}));

export default function Sidebar() {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <SidebarItem type="Machine node" />
      <SidebarItem type="Chemical process node" />
      <SidebarItem type="Transportation node" />
    </div>
  );
}
