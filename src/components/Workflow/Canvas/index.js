import {cloneDeep, mapValues} from "lodash";
import * as React from "react";
import styled from "styled-components";
import {
  FlowChart,
  INodeDefaultProps,
  INodeInnerDefaultProps
} from "@mrblenny/react-flow-chart";
import * as actions from "../../../utility/flowchart/actions";
import {chartSimple} from "../../../utility/flowchart/chart";
import {OUTPUT_ONLY, INPUT_ONLY} from "../../../utility/flowchart/constants";

const Rect = styled.div`
  position: absolute;
  height: 110px;
  background: #989faa;
  color: white;
  border-radius: 10px;
`;

const Circle = styled.div`
  position: absolute;
  width: 160px;
  height: 160px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e2aaaa;
  color: white;
  border-radius: 50%;
`;

const CircleOutput = styled.div`
  position: absolute;
  width: 160px;
  height: 160px;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #9db6df;
  color: white;
  border-radius: 50%;
`;

const MyPaper = styled.div`
  max-height: 75vh;
  overflow: hidden;
  padding: 0.5em;
`;

const NodeCustom = React.forwardRef(({node, children, ...otherProps}, ref) => {
  return node.type === INPUT_ONLY ? (
    <Circle ref={ref} {...otherProps}>
      {children}
    </Circle>
  ) : node.type === OUTPUT_ONLY ? (
    <CircleOutput ref={ref} {...otherProps}>
      {children}
    </CircleOutput>
  ) : (
    <Rect ref={ref} {...otherProps}>
      {children}
    </Rect>
  );
});

const Outer = styled.div`
  padding: 15px;
`;

const NodeInnerCustom = ({node, config}) => {
  if (node.type === OUTPUT_ONLY) {
    return (
      <Outer>
        <p>{node.properties.name}</p>
        <p>{node.properties.amount}</p>
      </Outer>
    );
  } else if (node.type === INPUT_ONLY) {
    return (
      <Outer>
        <p>{node.properties.name}</p>
        <p>{node.properties.amount}</p>
        <p>{node.properties.supplier}</p>
      </Outer>
    );
  } else {
    return (
      <Outer>
        <p>{node.properties.name}</p>
        <p>{node.properties.duration}</p>
      </Outer>
    );
  }
};

export default class Canvas extends React.Component {
  state = cloneDeep(chartSimple);
  render() {
    const chart = this.state;
    const stateActions = mapValues(actions, func => (...args) =>
      this.setState(func(...args))
    );
    if (chart.selected.type === "node") {
      // TODO: not like this
      this.props.nodeSelected(chart.selected, chart);
    } else {
      this.props.nodeNotSelected();
    }

    // TODO: not a good practice, not good code
    if (this.props.changedNodeData) {
      chart.nodes[
        this.props.changedNodeData.id
      ].properties = this.props.changedNodeData.properties;
    }

    return (
      <MyPaper>
        <FlowChart
          chart={chart}
          callbacks={stateActions}
          Components={{Node: NodeCustom, NodeInner: NodeInnerCustom}}
        />
      </MyPaper>
    );
  }
}
