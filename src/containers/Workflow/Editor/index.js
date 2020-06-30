import React from "react";

// components
import WorkflowCanvas from "../../../components/Workflow/Canvas/index";
import WorkflowSidebarToolbox from "../../../components/Workflow/Sidebar/Toolbox";

// style
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    padding: "20px 3em",
    minHeight: "90vh"
  },
  text: {
    padding: "0 50px"
  }
}));

const Editor = () => {
  const classes = useStyles();

  const handleDragItem = e => {
    const data = getChartData();
    console.log("data is being dragged", e);
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
    <>
      <Typography className={classes.text} variant="h4" color="primary">
        Name of the process flow
      </Typography>
      <Typography className={classes.text} variant="h5" color="primary">
        Description
      </Typography>
      <Grid container spacing={5} className={classes.container}>
        <Grid item md={8}>
          <WorkflowCanvas mode={"edit"} />
        </Grid>
        <Grid item md={4}>
          <WorkflowSidebarToolbox handleDragItem={handleDragItem} />
        </Grid>
      </Grid>
    </>
  );
};

export default Editor;
