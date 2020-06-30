import React from "react";

// style
import {makeStyles} from "@material-ui/core/styles";

// components
import {Typography, Dialog, DialogContent, TextField, DialogActions, Button} from "@material-ui/core";
import { useTranslation } from "react-i18next";

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
    const {t} = useTranslation();

    const getTitle = () => {
        if(type === "input-only") {
            return t("workflow.page.editor.process.type.input");
        } else if (type === "input-output") {
            return t("workflow.page.editor.process.type.process");
        } else {
            return t("workflow.page.editor.process.type.output");
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
                    {t("workflow.page.editor.dialog.cancel")}
                </Button>
                <Button onClick={onSave} color="primary">
                    {t("workflow.page.editor.dialog.save")}
                </Button> 
            </DialogActions>
        </Dialog>
    );
}
