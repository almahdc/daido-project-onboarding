import React from "react";

// style
import {makeStyles} from "@material-ui/core/styles";

// components
import SidebarItem from "../SidebarItem";

const useStyles = makeStyles(() => ({
  sidebar: {
    padding: "1em"
  }
}));

export default function SidebarDetails() {
  const classes = useStyles();
  return (
    <div className={classes.sidebar}>
      <SidebarItem type="Machine node" />
      <SidebarItem type="Chemical process node" />
      <SidebarItem type="Transportation node" />
    </div>
  );
}
