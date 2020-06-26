import React from "react";

// style
import {Box, Toolbar, Drawer, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Logo from "../../../assets/images/logo.png";
import Logo2 from "../../../assets/images/logo2.png";

// components
import AppMenuItem from "./AppMenuItem";
import MenuToggle from "./MenuToggle";

// data
import menuItemsData from "../../../utility/menuConfig";

// TODO: set the mobile version
// TODO: get rid of modules (use only material-ui and recommended way of using it)
// TODO: Button Logo leads to home
// TODO: imgs have to be responsive, everything has to be responsive!!

const useStyles = makeStyles({
  flexGrow: {
    flexGrow: "1"
  },
  imageLogo: {
    maxWidth: "10em"
  }
});

// component
export default function AppMenu(props) {
  // code for mobile version menu
  const classes = useStyles();
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
        type={props.type}
      />
    ));

  return (
    <Box display="flex" flexDirection="row-reverse" marginBottom="40px">
      <Toolbar className={classes.flexGrow}>
        <div className={classes.flexGrow}>
          <Button edge="start" color="inherit" aria-label="menu">
            <img
              src={props.type ? Logo : Logo2}
              className={classes.imageLogo}
              alt="logo"
            />
          </Button>
        </div>
        <MenuToggle clicked={toggleDrawer(true)} />
        <div className={classes.Menu}>{menuItems}</div>
      </Toolbar>
      <Drawer anchor="top" open={drawer} onClose={toggleDrawer(false)}>
        {menuItems}
      </Drawer>
    </Box>
  );
}
