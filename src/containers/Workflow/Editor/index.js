import React from "react";

// components
import WorkflowCanvas from "../../../components/Workflow/Canvas/index.tsx";
import SidebarToolbox from "../../../components/Workflow/Sidebar/Toolbox";
import SidebarDetails from "../../../components/Workflow/Sidebar/Details";

// style
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {TextField} from "@material-ui/core";

// utility
import {getNodeData} from "../../../utility/flowchart/nodeData";
import {useTranslation} from "react-i18next";
import {REACT_FLOW_CHART} from "../../../utility/flowchart/constants";

const useStyles = makeStyles(() => ({
  container: {
    padding: "20px 3em",
    minHeight: "90vh"
  },
  nameField: {
    margin: "dense",
    type: "text",
    marginLeft: "50px",
    marginRight: "200px",
    width: "50%"
  },
  descriptionField: {
    margin: "dense",
    type: "text",
    marginLeft: "50px",
    width: "50%"
  },
  input: {
    color: "black"
  }
}));

const Editor = () => {
  const classes = useStyles();

  const {t} = useTranslation();

  const [processName, setProcessName] = React.useState("");
  const [processDescription, setProcessDescription] = React.useState("");

  const [detailsView, setDetailsView] = React.useState(false);
  const [detailsData, setDetailsData] = React.useState(null);

  const [updatedDetailsData, setUpdatedDetailsData] = React.useState(null);

  const handleDragItem = (e, node) => {
    e.persist();
    const item = getNodeData(node.type, node.subtype);
    e.dataTransfer.setData(REACT_FLOW_CHART, JSON.stringify(item));
  };

  const nodeSelected = (selectedNode, chart) => {
    if (selectedNode && chart.hovered.id === selectedNode.id) {
      setDetailsData(chart.nodes[selectedNode.id]);
      setDetailsView(true);
    }
  };

  const nodeNotSelected = () => {
    setDetailsData(null);
    setDetailsView(false);
  };

  const handleSaveData = (e, newDetailsData) => {
    setUpdatedDetailsData(newDetailsData);
    nodeNotSelected();
  };

  const changedData = changedData => {
    setDetailsData(changedData);
  };

  return (
    <>
      <TextField
        InputProps={{className: classes.input}}
        className={classes.nameField}
        id="process-name"
        label={t("workflow.page.editor.process.name.title")}
        value={processName}
        onChange={event => setProcessName(event.target.value)}
        fullWidth
        autoCapitalize="true"
        required
      />
      <TextField
        InputProps={{className: classes.input}}
        className={classes.descriptionField}
        id="process-description"
        label={t("workflow.page.editor.process.name.description")}
        value={processDescription}
        onChange={event => setProcessDescription(event.target.value)}
        fullWidth
        autoCapitalize="true"
        required
      />
      <Grid container spacing={5} className={classes.container}>
        <Grid item md={8}>
          <WorkflowCanvas
            mode={"edit"}
            nodeSelected={nodeSelected}
            nodeNotSelected={nodeNotSelected}
            changedNodeData={updatedDetailsData}
          />
        </Grid>
        <Grid item md={4}>
          {detailsView ? (
            <SidebarDetails
              data={detailsData}
              onSaveData={handleSaveData}
              onChangedData={changedData}
            />
          ) : (
            <SidebarToolbox onDragItem={handleDragItem} />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Editor;
