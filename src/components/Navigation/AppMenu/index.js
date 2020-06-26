import React from "react";

// style
import {Box, Toolbar, Drawer} from "@material-ui/core";
import classes from "./AppMenu.module.scss";

// components
import AppMenuItem from "./AppMenuItem";
import MenuToggle from "./MenuToggle";

// data
import menuItemsData from "../../../utility/menuConfig";

// TODO: set the mobile version
// TODO: get rid of modules (use only material-ui and recommended way of using it)

// component
export default function AppMenu(props) {
  // code for mobile version menu
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

  // filtering which menu items to show depending on is user logged in or not
  const menuItems = menuItemsData
    .filter(menuItemData => {
      return props.isUserAuthenticated
        ? menuItemData.isPrivate
        : menuItemData.isPublic;
    })
    .map(menuItem => (
      <AppMenuItem
        key={`${menuItem.name}${menuItem.type}`}
        menuItemType={menuItem.type}
        menuItemIdentity={menuItem.identity}
        menuItemTitle={menuItem.name}
        path={menuItem.path}
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
