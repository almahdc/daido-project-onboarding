import React from "react";

// components
import WorkflowCanvas from "../../../components/Workflow/Canvas/index";
import WorkflowSidebarToolbox from "../../../components/Workflow/Sidebar/Toolbox";
import NodeDialog from "../../../components/Workflow/NodeDialog";

// style
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Typography, Button} from "@material-ui/core";

// utility
import {getNodeData} from "../../../utility/flowchart/nodeData";

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
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(null)
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [automaticPopup, setPopup] = React.useState(true)

  const handleDragItem = (e, type) => {
    e.persist()
    let item = getNodeData(type);
    item.name = "test";
    setData(item)
    console.log("data is being dragged", e);
    e.dataTransfer.setData("react-flow-chart", JSON.stringify(item));
    if (automaticPopup) {
      // openDialog();
    }
  };

  const openDialog = () => {
    console.log("openDialog", data)
    console.log("dialogData", name, description)
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

  return (
    <>
      <Typography className={classes.text} variant="h4" color="primary">
        Name of the process flow
      </Typography>
      <Typography className={classes.text} variant="h5" color="primary">
        Description
      </Typography>
      <Button variant="outlined" color="primary" onClick={openDialog}>
        Open simple dialog
      </Button>
      <Grid container spacing={5} className={classes.container}>
        <Grid item md={8}>
          <WorkflowCanvas mode={"edit"} />
        </Grid>
        <Grid item md={4}>
          <WorkflowSidebarToolbox handleDragItem={handleDragItem} />
        </Grid>
      </Grid>
      <NodeDialog type={data?.type} name={name} setName={setName} description={description} setDescription={setDescription} open={open} onClose={closeDialog}></NodeDialog>
    </>
  );
};

export default Editor;
