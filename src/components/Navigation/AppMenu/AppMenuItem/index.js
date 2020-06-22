import React from "react";

// style
import Button from "@material-ui/core/Button";

// components
import {NavLink} from "react-router-dom";
import ChangeLanguage from "./ChangeLanguage";

// utility
import {MenuItemIdentities, MenuItemTypes} from "../../../../utility/constants";

// translation
import {useTranslation} from "react-i18next";

// TODO: the lang part in the url - needs another way of specifing (another place)

// component
const MenuItem = ({
  menuItemTitle,
  handleClick,
  path,
  menuItemType,
  menuItemIdentity
}) => {
  const {t, i18n} = useTranslation();

  return (
    <>
      {menuItemType === MenuItemTypes.TYPICAL ? (
        <Button component={NavLink} to={`/${i18n.language}${path.pathName}`}>
          {t(menuItemTitle)}
        </Button>
      ) : (
        <>
          {menuItemIdentity === MenuItemIdentities.CHANGE_LANGUAGE ? (
            <ChangeLanguage />
          ) : null}
        </>
      )}
    </>
  );
};

export default MenuItem;
