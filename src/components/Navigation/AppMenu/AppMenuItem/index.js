import React from "react";

// Style
import Button from "@material-ui/core/Button";

import {NavLink} from "react-router-dom";

const menuItem = props => {
  return (
    <Button
      component={NavLink}
      to={{pathname: props.path.pathName, to: props.path.hash}}
    >
      {props.menuItemTitle}
    </Button>
  );
};

export default menuItem;
