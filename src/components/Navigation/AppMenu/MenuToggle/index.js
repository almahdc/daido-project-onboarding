import React from "react";

// style

// TODO: remove scss, move css to material-ui

import classes from "./MenuToggle.module.scss";

const drawerToggle = props => (
  <div className={classes.DrawerToggle} onClick={props.clicked}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default drawerToggle;
