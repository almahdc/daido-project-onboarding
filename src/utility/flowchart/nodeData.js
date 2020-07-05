import {OUTPUT_ONLY, OUTPUT_INPUT, INPUT_ONLY} from "./constants";

export const getNodeData = (nodeType, processPointType) => {
  const nodeData = {
    id: "",
    type: nodeType,
    ports: {
      port1: {},
      port2: {}
    },
    properties: {subtype: processPointType, name: processPointType}
  };

  switch (nodeType) {
    case OUTPUT_INPUT: {
      nodeData.ports.port1 = {
        id: "port1",
        type: "left"
      };
      nodeData.ports.port2 = {
        id: "port2",
        type: "right"
      };
      nodeData.properties = {
        ...nodeData.properties,
        duration: "0"
      };

      break;
    }

    case OUTPUT_ONLY: {
      nodeData.ports.port1 = {
        id: "port1",
        type: "top"
      };
      nodeData.properties = {
        ...nodeData.properties,
        amount: "10"
      };

      break;
    }

    case INPUT_ONLY: {
      nodeData.ports.port1 = {
        id: "port1",
        type: "bottom"
      };
      nodeData.properties = {
        ...nodeData.properties,
        amount: "10",
        supplier: "Congo"
      };

      break;
    }

    default: {
      break;
    }
  }

  return nodeData;
};
