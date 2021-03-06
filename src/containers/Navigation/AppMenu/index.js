import React from "react";

// style
import {Box, Toolbar, Drawer, Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Logo from "../../../assets/images/logo.png";
import Logo2 from "../../../assets/images/logo2.png";

// components
import AppMenuItem from "../../../components/Navigation/AppMenu/AppMenuItem";
import MenuToggle from "../../../components/Navigation/AppMenu/MenuToggle";
import {NavLink} from "react-router-dom";

//
import {useTranslation} from "react-i18next";
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
    maxWidth: "8em"
  },
  menu: {
    flexBasis: "200px",
    flexShrink: "0"
  },
  toolbar: {
    display: "flex"
  }
});

// component
export default function AppMenu(props) {
  // code for mobile version menu
  const {i18n} = useTranslation();
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
    <Box marginBottom="40px">
      <Toolbar className={classes.toolbar}>
        <div className={classes.flexGrow}>
          <Button
            edge="start"
            color="inherit"
            aria-label="menu"
            component={NavLink}
            to={`/${i18n.language}/home?theme=blue`}
          >
            <img
              src={props.type ? Logo : Logo2}
              className={classes.imageLogo}
              alt="logo"
            />
          </Button>
        </div>
        <MenuToggle clicked={toggleDrawer(true)} />
        <div className={classes.menu}>{menuItems}</div>
      </Toolbar>
      <Drawer anchor="top" open={drawer} onClose={toggleDrawer(false)}>
        {menuItems}
      </Drawer>
    </Box>
  );
}
