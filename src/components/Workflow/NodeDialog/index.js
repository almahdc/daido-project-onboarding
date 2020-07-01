import React from "react";

// style
import {makeStyles} from "@material-ui/core/styles";

// components
import {Typography, Dialog, DialogContent, TextField, DialogActions, Button} from "@material-ui/core";

const useStyles = makeStyles(() => ({
    dialog: {
        paddingTop: "0px",
        padding: "0px",
        borderColor: "#99FFC9",
    },
    dialogBody: {
    },
    title: {
        textAlign: "center"
    },
    textField: {
        margin: "dense",
        type: "text",
        marginTop: "10px",
    },
    button: {
        marginRight: "15px"
    },
    input: {
      color: "black"
    }
}));

export default function NodeDialog({type, name, setName, description, setDescription, open, onClose}) {
    const classes = useStyles();

    const getTitle = () => {
        if(type === "input-only") {
            return "INPUT";
        } else if (type === "input-output") {
            return "PROCESS";
        } else {
            return "OUTPUT";
        }
    }

    const onCancel = () => {
        onClose(false)
    }

    const onSave = () => {
        onClose(true)
    }

    return (
        <Dialog PaperProps={{classes: {root: classes.dialog}}} open={open} onClose={onClose} fullWidth={true} maxWidth="md">
            <DialogContent>
                <Typography className={classes.title} variant="h4" color="primary">
                    {getTitle()}
                </Typography>
                <TextField InputProps={{ className: classes.input }} className={classes.textField} autoFocus id="item-name" label="Name" defaultValue={name} onChange={(event) => setName(event.target.value)} fullWidth required/>
                <TextField InputProps={{ className: classes.input }} className={classes.textField} id="item-description" label="Description" defaultValue={description} onChange={(event) => setDescription(event.target.value)} fullWidth/>
            </DialogContent>
            <DialogActions>
                <Button onClick={onCancel} color="primary">
                    CANCEL
                </Button>
                <Button onClick={onSave} color="primary">
                    SAVE
                </Button> 
            </DialogActions>
        </Dialog>
    );
}
