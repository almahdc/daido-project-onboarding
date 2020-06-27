import React from "react";

// components
import WorkflowCanvas from "../../../components/Workflow/Canvas/index";
import WorkflowSidebarToolbox from "../../../components/Workflow/Sidebar/Toolbox";

// style
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(() => ({
  container: {
    padding: "0 3em"
  }
}));

const Editor = () => {
  const classes = useStyles();

  const handleDragItem = e => {
    const data = getChartData();
    console.log("data", e);
    e.dataTransfer.setData("react-flow-chart", JSON.stringify(data));
  };

  const getChartData = () => {
    return {
      type: "input-output",
      ports: {
        port1: {
          id: "port1",
          type: "left"
        },
        port2: {
          id: "port2",
          type: "right"
        }
      },
      properties: {}
    };
  };

  return (
    <Grid container spacing={5} className={classes.container}>
      <Grid item md={9}>
        <WorkflowCanvas mode={"edit"} />
      </Grid>
      <Grid item md={3}>
        <WorkflowSidebarToolbox handleDragItem={handleDragItem} />
      </Grid>
    </Grid>
  );
};

export default Editor;
