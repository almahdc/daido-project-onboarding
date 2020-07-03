import React from "react";

// components
import WorkflowCanvas from "../../../components/Workflow/Canvas/index";
import SidebarToolbox from "../../../components/Workflow/Sidebar/Toolbox";
import SidebarDetails from "../../../components/Workflow/Sidebar/Details";
import NodeDialog from "../../../components/Workflow/NodeDialog";

// style
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { TextField } from "@material-ui/core";

// utility
import {getNodeData} from "../../../utility/flowchart/nodeData";
import { useTranslation } from "react-i18next";

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
    width: "35%"
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

  const [open, setOpen] = React.useState(false);
  const [detailsView, setDetailsView] = React.useState(false);
  const [data, setData] = React.useState(null)
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [processName, setProcessName] = React.useState("");
  const [processDescription, setProcessDescription] = React.useState("");

  const handleDragItem = (e, type) => {
    e.persist()
    let item = getNodeData(type);
    // TODO: Remove hardcoded test values
    item.name = "test";
    item.description = "desc";
    setData(item)
    console.log("data is being dragged", e);
    e.dataTransfer.setData("react-flow-chart", JSON.stringify(item));
  };

  const openDetails = () => {
    console.log("openDetails", data, name, description)
    if (data !== null) {
      setName(data?.name)
      setDescription(data?.description)
      setDetailsView(!detailsView);
    }
  };

  const closeDetails = () => {
    setDetailsView(false);
    setData(null)
  }

  const openDialog = () => {
    console.log("openDialog", data, name, description)
    if (data !== null) {
      setName(data?.name)
      setDescription(data?.description)
      setOpen(true);
    }
  };
  
  const closeDialog = (value) => {
    console.log("closeDialog", value)
    setOpen(false);
    if(value) {
      setData({
        ...data,
        name,
        description
      })
    }
    setName("")
    setDescription("")
  };

  const renderSidebar = () => {
    if(detailsView) {
      return <SidebarDetails openDialog={openDialog} closeDetails={closeDetails} type={data?.type} name={data?.name} description={data?.description}/>;
    } else {
      return <SidebarToolbox  handleDragItem={handleDragItem} openDetails={openDetails}/>;
    }
  }

  return (
    <>
      <TextField InputProps={{ className: classes.input }} className={classes.nameField} id="process-name" label={t("workflow.page.editor.process.name.title")} onChange={(event) => setProcessName(event.target.value)} fullWidth autoCapitalize required/>
      <TextField InputProps={{ className: classes.input }} className={classes.descriptionField} id="process-description" label={t("workflow.page.editor.process.name.description")} onChange={(event) => setProcessDescription(event.target.value)} fullWidth autoCapitalize required/>
      <Grid container spacing={5} className={classes.container}>
        <Grid item md={8}>
          <WorkflowCanvas mode={"edit"} />
        </Grid>
        <Grid item md={4}>
          {renderSidebar()}
        </Grid>
      </Grid>
      <NodeDialog type={data?.type} name={name} setName={setName} description={description} setDescription={setDescription} open={open} onClose={closeDialog}></NodeDialog>
    </>
  );
};

export default Editor;
