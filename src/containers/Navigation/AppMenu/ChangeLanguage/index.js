import {FormControl, MenuItem, Select} from "@material-ui/core";
import React, {useState} from "react";

import {makeStyles} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import {useTranslation} from "react-i18next";

import {replaceString} from "../../../../utility/stringHelper";

// TODO: language menu item - form control - style better
// TODO: detect from browser
// TODO: do the routing more stable

const useStyles = makeStyles(() => ({
  select: {
    margin: "0.25rem",
    fontSize: "0.875rem",
    textTransform: "uppercase"
  },
  itemLight: {
    color: "#ffffff"
  },
  itemDark: {
    color: "#000000"
  }
}));

const ChangeLanguage = ({type}) => {
  const classes = useStyles();

  const history = useHistory();
  const {i18n, t} = useTranslation();
  const [dropdownLang, setDropdownLang] = useState(i18n.language || "en");

  const languageHandler = event => {
    const newLanguage = event.target.value;
    if (dropdownLang !== newLanguage) {
      setDropdownLang(newLanguage);

      const newPathName = replaceString(
        history.location.pathname + history.location.search,
        0,
        `/${newLanguage}`,
        3
      );

      console.log(newPathName);
      history.replace(newPathName);

      i18n.changeLanguage(newLanguage);
    }
  };

  return (
    <FormControl style={{minWidth: 50}}>
      <Select
        variant="standard"
        value={dropdownLang}
        onChange={languageHandler}
        disableUnderline={true}
        className={`${classes.select} ${
          type ? classes.itemLight : classes.itemDark
        }`}
        classes={{
          icon: type ? classes.itemLight : classes.itemDark
        }}
      >
        <MenuItem value="en" className={classes.itemDark}>
          {t("menu.item.change.language.en.option")}
        </MenuItem>
        <MenuItem value="zh" className={classes.itemDark}>
          {t("menu.item.change.language.zh.option")}
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default ChangeLanguage;
