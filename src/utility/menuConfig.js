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
  },
  {
    name: "WORKFLOW EDITOR",
    path: {pathName: "/workfloweditor"},
    isPublic: true,
    isPrivate: true
  }
];

export default menuItems;
