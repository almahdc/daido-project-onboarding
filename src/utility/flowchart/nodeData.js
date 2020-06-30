export const getNodeData = type => {
  switch (type) {
    case "INPUT-OUTPUT": {
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
    }

    case "OUTPUT": {
      return {
        type: "output-only",
        ports: {
          port1: {
            id: "port1",
            type: "top"
          }
        },
        properties: {}
      };
    }

    case "INPUT": {
      return {
        type: "input-only",
        ports: {
          port1: {
            id: "port1",
            type: "bottom"
          }
        },
        properties: {}
      };
    }

    default: {
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
    }
  }
};
