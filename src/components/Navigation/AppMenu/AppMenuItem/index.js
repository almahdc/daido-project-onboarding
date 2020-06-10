import React from "react";

// Style
import classes from "./AppMenuItem.module.scss";

//import {NavLink} from "react-router-dom";
//import {Link} from "react-router-dom";

const menuItem = props => {
  return (
    <div
      className={classes.MenuItem}
      to={{pathname: props.path.pathName, hash: props.path.hash}}
      onClick={props.clicked}
    >
      {props.menuItemTitle}
    </div>
  );
};

export default menuItem;
