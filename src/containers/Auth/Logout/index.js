import React, {useEffect} from "react";

import {Auth} from "aws-amplify";

import {Redirect} from "react-router";

import UserData from "../../../utility/userData";

export default function Logout() {
  useEffect(() => {
    Auth.signOut()
      .then(data => {
        UserData.removeUserData();
      })
      .catch(err => console.log(err));
  });

  return <div>{UserData.getUser() ? null : <Redirect to="/home" />}</div>;
}
