import React, {useEffect} from "react";
import {Redirect} from "react-router";

// aws
import {Auth} from "aws-amplify";

// data
import UserData from "../../../utility/userData";

// component
export default function Logout() {
  useEffect(() => {
    Auth.signOut()
      .then(data => {
        UserData.removeUserData();
      })
      .catch(err => console.log(err));
  });

  return <div>{UserData.getUser() ? null : <Redirect to="/" />}</div>;
}
