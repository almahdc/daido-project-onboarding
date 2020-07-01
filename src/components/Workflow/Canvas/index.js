import React, {useState} from "react";
import {cloneDeep, mapValues} from "lodash";

import {FlowChartWithState} from "@mrblenny/react-flow-chart";
import * as actions from "@mrblenny/react-flow-chart";

import {chartSimple} from "../../../utility/flowchart/chart";

// components

// style
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

import styled from "styled-components";

const useStyles = makeStyles(() => ({
  canvas: {
    maxHeight: "75vh",
    overflow: "hidden",
    padding: "0.5em"
  }
}));

// TODO: hm styled components, move it to a new file and do it with material-ui

const Rect = styled.div`
  position: absolute;
  width: 200px;
  height: 110px;
  background: #989faa;
  color: white;
  border-radius: 10px;
`;

const Circle = styled.div`
  position: absolute;
  width: 100px;
  height: 100px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #9db6df;
  color: white;
  border-radius: 50%;
`;

const NodeCustom = React.forwardRef(({node, children, ...otherProps}, ref) => {
  if (node.type === "input-output") {
    return (
      <Rect ref={ref} {...otherProps}>
        {children}
      </Rect>
    );
  } else if (node.type === "input-only") {
    return (
      <Circle ref={ref} {...otherProps}>
        {children}
      </Circle>
    );
  } else {
    return (
      <Circle ref={ref} {...otherProps}>
        {children}
      </Circle>
    );
  }
});

// TODO: Urgent - issue with duplicating the nodes

export default function Canvas() {
  const classes = useStyles();

  console.log("actions", actions);

  const [chart, setChart] = useState({
    scale: 1,
    offset: {
      x: 0,
      y: 0
    },
    nodes: {},
    links: {},
    selected: {},
    hovered: {}
  });

  console.log(chartSimple, chart);

  const stateActions = mapValues(actions => (...args) => setChart(...args));

  console.log("selected", stateActions, chart.selected);

  return (
    <Paper className={classes.canvas} color="secondary">
      <FlowChartWithState
        config={{readonly: false, selectable: true}}
        initialValue={chart}
        Components={{Node: NodeCustom}}
      />
    </Paper>
  );
}
