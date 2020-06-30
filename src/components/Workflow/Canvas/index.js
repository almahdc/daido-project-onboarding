import React from "react";

import {FlowChartWithState} from "@mrblenny/react-flow-chart";

// style
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(() => ({
  canvas: {
    maxHeight: "75vh",
    overflow: "hidden",
    padding: "0.5em"
  }
}));

const chartSimple = {
  scale: 1,
  offset: {
    x: 0,
    y: 0
  },
  nodes: {},
  links: {},
  selected: {},
  hovered: {}
};

export default function Canvas() {
  const classes = useStyles();

  return (
    <Paper className={classes.canvas} color="secondary">
      <FlowChartWithState initialValue={chartSimple} />
    </Paper>
  );
}
