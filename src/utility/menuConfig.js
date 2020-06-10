const menuItems = [
  {
    name: "HOME",
    path: {pathName: "/"},
    isPublic: true,
    isPrivate: true
  },
  {
    name: "LOGOUT",
    path: {pathName: "/logout"},
    isPublic: false,
    isPrivate: false
  },
  {
    name: "LOGIN",
    path: {pathName: "/auth"},
    isPublic: false,
    isPrivate: false
  }
];

export default menuItems;
