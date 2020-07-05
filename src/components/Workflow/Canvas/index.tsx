import { cloneDeep, mapValues } from 'lodash'
import * as React from 'react'
import styled from 'styled-components'
import { FlowChart, INodeDefaultProps, INodeInnerDefaultProps } from '@mrblenny/react-flow-chart'
import * as actions from '../../../utility/flowchart/actions'
import { chartSimple } from '../../../utility/flowchart/chart'
import {OUTPUT_ONLY, INPUT_ONLY} from '../../../utility/flowchart/constants'

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

/**
 * Create the custom component,
 * Make sure it has the same prop signature
 * You'll need to add {...otherProps} so the event listeners are added to your component
 */
const NodeCustom = React.forwardRef(({ node, children, ...otherProps }: INodeDefaultProps, ref: React.Ref<HTMLDivElement>) => {

  if (node.type === INPUT_ONLY ) {
    return (
      <Circle ref={ref} {...otherProps}>
        {children}
      </Circle>
    )
  } else if (node.type === OUTPUT_ONLY) {
    return (
      <CircleOutput ref={ref} {...otherProps}>
        {children}
      </CircleOutput>
    )
  } else {
    return (
      <Rect ref={ref} {...otherProps}>
      {children}
    </Rect>
    )
  }
})

const Outer = styled.div`
  padding: 15px;
`
/**
 * Create the custom component,
 * Make sure it has the same prop signature
 */
const NodeInnerCustom = ({ node, config }: INodeInnerDefaultProps) => {
  if (node.type === OUTPUT_ONLY) {
    return (
      <Outer>
        <p>{node.properties.name}</p>
        <p>{node.properties.amount}</p>
      </Outer>
    )
  } else if (node.type === INPUT_ONLY) {
    return (
      <Outer>
        <p>{node.properties.name}</p>
        <p>{node.properties.amount}</p>
        <p>{node.properties.supplier}</p>
      </Outer>
    )
  } else {
    return (
      <Outer>
      <p>{node.properties.name}</p>
      <p>{node.properties.duration}</p>
      </Outer>
    )
  }
}

export default class Canvas extends React.Component<any, any> {

  public state = cloneDeep(chartSimple)
  public render () {

    const chart = this.state
    const stateActions = mapValues(actions, (func: any) =>
      (...args: any) => this.setState(func(...args))) as typeof actions
      if(chart.selected.type === "node") {
        // TODO: not like this
        this.props.nodeSelected(chart.selected, chart)
      } else {
        this.props.nodeNotSelected();
      }

      // TODO: not a good practice, not good code
      if(this.props.changedNodeData){
        chart.nodes[this.props.changedNodeData.id].properties = this.props.changedNodeData.properties
        this.props.doneUpdate();
      }

      return (
        <MyPaper>
          <FlowChart
            chart={chart}
            callbacks={stateActions}
            Components={{Node: NodeCustom, NodeInner: NodeInnerCustom}}
          />
        </MyPaper>
      )
  }
}
