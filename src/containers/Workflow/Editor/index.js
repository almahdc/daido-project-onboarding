import React from "react";

// components
import WorkflowCanvas from "../../../components/Workflow/Canvas";
import WorkflowSidebar from "../../../components/Workflow/Sidebar";

// style
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  container: {
    justifyContent: "space-around"
  }
}));

const Editor = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid item md={8}>
        <WorkflowCanvas mode={"edit"} />
      </Grid>
      <Grid item md={3}>
        <WorkflowSidebar mode={"nodeNotSelected"} />
      </Grid>
    </Grid>
  );
};

export default Editor;
