import React, {useEffect} from "react";
import {Redirect} from "react-router";

// TODO: not to show a new component -> just execute logout
// aws
import {Auth} from "aws-amplify";

// data
import UserData from "../../../utility/userData";

// style
import CircularProgress from "@material-ui/core/CircularProgress";

// i18n
import {useTranslation} from "react-i18next";

// component
export default function Logout() {
  const {i18n} = useTranslation();
  useEffect(() => {
    Auth.signOut()
      .then(data => {
        UserData.removeUserData();
      })
      .catch(err => console.log(err));
  });

  return (
    <div>
      <CircularProgress disableShrink />
      {UserData.getUser() ? null : (
        <Redirect to={`/${i18n.language}/home?theme=blue`} />
      )}
    </div>
  );
}
