import React from "react";

// Router

// Style
import {Box, Toolbar, Drawer} from "@material-ui/core";
import classes from "./AppMenu.module.scss";

// Components
import MenuItem from "./AppMenuItem";
import MenuToggle from "./MenuToggle";

// Data
import menuItemsData from "../../../utility/menuConfig";

export default function Menu(props) {
  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = open => event => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer(open);
  };

  const menuItems = menuItemsData
    .filter(menuItemData => {
      return props.isUserAuthenticated
        ? menuItemData.isPrivate
        : menuItemData.isPublic;
    })
    .map(menuItem => (
      <MenuItem
        key={menuItem.name}
        menuItemTitle={menuItem.name}
        path={menuItem.path}
        clicked={toggleDrawer(false)}
      />
    ));

  return (
    <Box display="flex" flexDirection="row-reverse" marginBottom="40px">
      <Toolbar>
        <MenuToggle clicked={toggleDrawer(true)} />
        <div className={classes.Menu}>{menuItems}</div>
      </Toolbar>
      <Drawer anchor="top" open={drawer} onClose={toggleDrawer(false)}>
        {menuItems}
      </Drawer>
    </Box>
  );
}
