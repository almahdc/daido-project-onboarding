import {MenuItemTypes, MenuItemIdentities} from "./constants";

// menu item typical is an item that doesn't have any subitems (dropdown menu) -> this item has to have name and path
// menu item select is an item that has subitems and takes its name from selected option (so no need to set up name and path for this)
// identity is just a simplification, it is imagined when menu recognizes a specific identity, just to show already prepared code for that identity (not really modular, but simple)
// public / private - show for every user / show only for logged in users

const menuItems = [
  {
    type: MenuItemTypes.TYPICAL,
    name: "menu.item.home.text",
    path: {pathName: "/home"},
    isPublic: true,
    isPrivate: true
  },
  {
    type: MenuItemTypes.TYPICAL,
    name: "menu.item.logout.text",
    path: {pathName: "/logout"},
    isPublic: false,
    isPrivate: true
  },
  {
    type: MenuItemTypes.TYPICAL,
    name: "menu.item.login.text",
    path: {pathName: "/auth"},
    isPublic: true,
    isPrivate: false
  },
  {
    name: "WORKFLOW EDITOR",
    path: {pathName: "/workfloweditor"},
    isPublic: true,
    isPrivate: true
  },
  {
    type: MenuItemTypes.SELECT,
    identity: MenuItemIdentities.CHANGE_LANGUAGE,
    path: null,
    isPublic: true,
    isPrivate: true
  }
];

export default menuItems;
