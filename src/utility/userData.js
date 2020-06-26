// TODO: is this best practice?

import {UserTypes} from "./constants";

let UserData = (function() {
  let getUser = function() {
    return localStorage.getItem("userType");
  };

  // alma180720: remove hc code
  let setUser = function(user) {
    localStorage.setItem(
      "userType",
      user === "almahdc+admin@gmail.com"
        ? UserTypes.ADMIN
        : UserTypes.MANUFACTURER
    );
  };

  let removeUserData = function() {
    localStorage.removeItem("userType");
  };

  return {
    getUser: getUser,
    setUser: setUser,
    removeUserData: removeUserData
  };
})();

export default UserData;
