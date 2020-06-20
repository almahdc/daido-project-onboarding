import React from "react";

import {FlowChartWithState} from "@mrblenny/react-flow-chart";

// style
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(() => ({
  canvas: {
    padding: "1em"
  }
}));

const chartSimple = {
  scale: 1,
  offset: {
    x: 0,
    y: 0
  },
  nodes: {
    node1: {
      id: "node1",
      type: "output-only",
      position: {
        x: 300,
        y: 100
      },
      ports: {
        port1: {
          id: "port1",
          type: "output",
          properties: {
            value: "yes"
          }
        },
        port2: {
          id: "port2",
          type: "output",
          properties: {
            value: "no"
          }
        }
      }
    },
    node2: {
      id: "node2",
      type: "input-output",
      position: {
        x: 300,
        y: 300
      },
      ports: {
        port1: {
          id: "port1",
          type: "input"
        },
        port2: {
          id: "port2",
          type: "output"
        }
      }
    }
  },
  links: {
    link1: {
      id: "link1",
      from: {
        nodeId: "node1",
        portId: "port2"
      },
      to: {
        nodeId: "node2",
        portId: "port1"
      }
    }
  },
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
