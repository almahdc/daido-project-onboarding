const menuItems = [
  {
    name: "HOME",
    path: {pathName: "/home"},
    isPublic: true,
    isPrivate: true
  },
  {
    name: "LOGOUT",
    path: {pathName: "/logout"},
    isPublic: false,
    isPrivate: true
  },
  {
    name: "LOGIN",
    path: {pathName: "/auth"},
    isPublic: true,
    isPrivate: false
  }
];

export default menuItems;
