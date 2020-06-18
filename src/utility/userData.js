var UserData = (function() {
  var getUser = function() {
    return localStorage.getItem("userType");
  };

  // alma180720: remove hc code
  var setUser = function(user) {
    localStorage.setItem(
      "userType",
      user === "almahdc+admin@gmail.com" ? "ADMIN" : "MANUF"
    );
  };

  var removeUserData = function() {
    localStorage.removeItem("userType");
  };

  return {
    getUser: getUser,
    setUser: setUser,
    removeUserData: removeUserData
  };
})();

export default UserData;
