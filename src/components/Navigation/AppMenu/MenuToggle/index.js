import React from "react";

// Style
import classes from "./MenuToggle.module.scss";

const drawerToggle = props => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
