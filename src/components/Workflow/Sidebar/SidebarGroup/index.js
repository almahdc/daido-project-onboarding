import React from "react";

// style
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

// components
import SidebarItem from "../SidebarItem";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  group: {
    padding: "1em",
    margin: "1em",
    backgroundColor: "#99FFC9"
  },
  title: {
    textAlign: "center"
  }
}));

export default function SidebarGroup({groupName, items, handleDragItem}) {
  const classes = useStyles();
  return (
    <Paper className={classes.group} color="secondary">
      <Typography className={classes.title} variant="h6" color="primary">
        {groupName}
      </Typography>
      {items.map(function(item, index) {
        return (
          <SidebarItem
            key={index}
            type={item.name}
            onDragItem={e => handleDragItem(e, groupName)}
          />
        );
      })}
    </Paper>
  );
}
