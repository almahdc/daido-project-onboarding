import React from "react";

// style
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

// components
import {NavLink} from "react-router-dom";

// containers
import ChangeLanguage from "../../../../containers/Navigation/AppMenu/ChangeLanguage";

// utility
import {MenuItemIdentities, MenuItemTypes} from "../../../../utility/constants";

// translation
import {useTranslation} from "react-i18next";

// TODO: the lang part in the url - needs another way of specifing (another place)
// TODO: how to get color='white' to work ??

const useStyles = makeStyles({
  itemLight: {
    color: "#ffffff"
  },
  itemDark: {
    color: "#000000"
  }
});

// component
const MenuItem = ({
  menuItemTitle,
  handleClick,
  path,
  menuItemType,
  menuItemIdentity,
  type
}) => {
  const {t, i18n} = useTranslation();
  const classes = useStyles();

  return (
    <>
      {menuItemType === MenuItemTypes.TYPICAL ? (
        <Button
          component={NavLink}
          to={`/${i18n.language}${path.pathName}`}
          className={type ? classes.itemLight : classes.itemDark}
        >
          {t(menuItemTitle)}
        </Button>
      ) : (
        <>
          {menuItemIdentity === MenuItemIdentities.CHANGE_LANGUAGE ? (
            <ChangeLanguage type={type} />
          ) : null}
        </>
      )}
    </>
  );
};

export default MenuItem;
