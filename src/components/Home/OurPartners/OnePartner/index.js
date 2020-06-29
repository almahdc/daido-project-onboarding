import React from "react";

// TODO: be careful with px and em + do the flex grid

// styles
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  image: {
    width: "150px",
    height: "auto",
    padding: "1em 0"
  },
  content: {
    width: "200px",
    padding: "0.5em"
  },
  additional: {
    textAlign: "right",
    fontSize: "10px"
  }
});

export default function OnePartner({image, additional, description}) {
  const classes = useStyles();
  return (
    <Grid item>
      <Paper className={classes.content}>
        <Typography color="textSecondary" className={classes.additional}>
          {additional}
        </Typography>
        <img src={image} className={classes.image} alt="Our partner" />
        <Typography color="textSecondary" variant="caption">
          {description}
        </Typography>
      </Paper>
    </Grid>
  );
}
